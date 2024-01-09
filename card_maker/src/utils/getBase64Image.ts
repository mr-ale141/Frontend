import { Image, Size } from "../data/type/type";

async function getBase64Image(src: string | File): Promise<Image | undefined> {
    const image: Image = {
        type: "base64",
        data: "",
        size: {
            width: 0,
            height: 0,
        },
    };
    switch (typeof src) {
        case "string": {
            try {
                const base64String: string | undefined = await fetch(src)
                    .then((response) => {
                        if (!response.ok) {
                            alert("Error download! " + `(${response.status})`);
                            return undefined;
                        }
                        return response.blob();
                    })
                    .then((blob) => {
                        if (blob) {
                            return new Promise((resolve, reject) => {
                                const reader = new FileReader();
                                reader.onloadend = () =>
                                    resolve(reader.result as string);
                                reader.onerror = () => reject(reader.error);
                                reader.readAsDataURL(blob);
                            });
                        } else {
                            return undefined;
                        }
                    });
                if (base64String) image.data = base64String;
            } catch (err) {
                alert(err);
                return undefined;
            }
            break;
        }
        case "object": {
            const base64Promise: Promise<string | undefined> = new Promise(
                (resolve, reject) => {
                    const reader = new FileReader();
                    reader.onloadend = () => resolve(reader.result as string);
                    reader.onerror = () => reject(reader.error);
                    reader.readAsDataURL(src as File);
                },
            );
            const base64String = await base64Promise
                .then((str) => str)
                .catch((error) => {
                    alert(error);
                    return undefined;
                });
            if (base64String) image.data = base64String;
            break;
        }
        default:
            return undefined;
    }
    const sizePromise: Promise<Size> = new Promise((resolve, reject) => {
        const size: Size = { width: 0, height: 0 };
        const img = document.createElement("img");
        img.onload = () => {
            size.width = img.width;
            size.height = img.height;
            resolve(size);
        };
        img.onerror = (error) => reject(error);
        img.src = image.data;
    });
    image.size = await sizePromise;
    return image;
}

export default getBase64Image;
