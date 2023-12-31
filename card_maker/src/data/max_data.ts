import {
    ArtBlockType,
    ArtName,
    ImageBlockType,
    Session,
    Template,
    TextBlockType,
    TypeBlock,
} from "./type/type";
import stars from "./img/png/stars.png";
import newImage from "./img/png/newImage.png";
import santa from "./img/jpg/santaWithNoteBook.jpg";
import flowers from "./img/png/flowers.png";
import snowFir from "./img/png/snow_fir.png";
import frame from "./img/png/frame.png";
import mountain from "./img/jpg/mountain.jpg";
import previewTemplate0 from "../data/img/templatePreview/0.png";
import previewTemplate1 from "../data/img/templatePreview/1.png";
import previewTemplate2 from "../data/img/templatePreview/2.png";
import previewTemplate3 from "../data/img/templatePreview/3.png";
import previewTemplate4 from "../data/img/templatePreview/4.png";
import previewTemplate5 from "../data/img/templatePreview/5.png";
import { v4 as uuidV4 } from "uuid";

export const textBlockSource: Array<TextBlockType> = [
    {
        id: uuidV4(),
        size: {
            width: 180,
            height: 110,
        },
        rotate: 0,
        scale: {
            x: 1,
            y: 1,
        },
        position: {
            left: 50,
            top: 50,
        },
        positionText: {
            justifyContent: "center",
            alignItems: "center",
        },
        type: TypeBlock.text,
        text: {
            value: "New text",
            fontSize: 14,
            fontFamily: "Arial",
            color: {
                r: 0xff,
                g: 0x00,
                b: 0x00,
                a: 1,
            },
            fontWeight: 400,
            fontStyle: "normal",
            textDecoration: "none",
        },
        bgImage: {
            type: "",
            data: "",
        },
        bgColor: {
            r: 0xff,
            g: 0xff,
            b: 0xff,
            a: 0,
        },
    },
    {
        id: uuidV4(),
        size: {
            width: 350,
            height: 110,
        },
        rotate: 0,
        scale: {
            x: 1,
            y: 1,
        },
        position: {
            left: 50,
            top: 40,
        },
        positionText: {
            justifyContent: "center",
            alignItems: "center",
        },
        type: TypeBlock.text,
        text: {
            value: "Go to sleep. I will finish",
            fontSize: 22,
            fontFamily: "Arial",
            color: {
                r: 0xaa,
                g: 0xaa,
                b: 0x00,
                a: 1,
            },
            fontWeight: 800,
            fontStyle: "normal",
            textDecoration: "none",
        },
        bgImage: {
            type: "",
            data: "",
        },
        bgColor: {
            r: 0x36,
            g: 0x23,
            b: 0x45,
            a: 0,
        },
    },
    {
        id: uuidV4(),
        size: {
            width: 350,
            height: 110,
        },
        rotate: 0,
        scale: {
            x: 1,
            y: 1,
        },
        position: {
            left: 30,
            top: 40,
        },
        positionText: {
            justifyContent: "center",
            alignItems: "center",
        },
        type: TypeBlock.text,
        text: {
            value: "Happy New Year!",
            fontSize: 22,
            fontFamily: "Arial",
            color: {
                r: 0xff,
                g: 0xff,
                b: 0x00,
                a: 1,
            },
            fontWeight: 800,
            fontStyle: "normal",
            textDecoration: "none",
        },
        bgImage: {
            type: "",
            data: "",
        },
        bgColor: {
            r: 0x36,
            g: 0x23,
            b: 0x45,
            a: 0,
        },
    },
    {
        id: uuidV4(),
        size: {
            width: 200,
            height: 110,
        },
        rotate: 0,
        scale: {
            x: 1,
            y: 1,
        },
        position: {
            left: 350,
            top: 250,
        },
        positionText: {
            justifyContent: "center",
            alignItems: "center",
        },
        type: TypeBlock.text,
        text: {
            value: "Your text is here",
            fontSize: 22,
            fontFamily: "Arial",
            color: {
                r: 0xaa,
                g: 0x00,
                b: 0x55,
                a: 1,
            },
            fontWeight: 400,
            fontStyle: "normal",
            textDecoration: "none",
        },
        bgImage: {
            type: "",
            data: "",
        },
        bgColor: {
            r: 0x36,
            g: 0x23,
            b: 0x45,
            a: 0,
        },
    },
];

export const imageBlockSource: Array<ImageBlockType> = [
    {
        id: uuidV4(),
        size: {
            width: 100,
            height: 100,
        },
        rotate: 0,
        scale: {
            x: 1,
            y: 1,
        },
        position: {
            left: 10,
            top: 10,
        },
        type: TypeBlock.image,
        bgImage: {
            type: "Path",
            data: newImage,
        },
        bgColor: {
            r: 0xff,
            g: 0xff,
            b: 0xff,
            a: 0,
        },
    },
    {
        id: uuidV4(),
        size: {
            width: 300,
            height: 300,
        },
        rotate: 0,
        scale: {
            x: 1,
            y: 1,
        },
        position: {
            left: 150,
            top: 150,
        },
        type: TypeBlock.image,
        bgImage: {
            type: "link",
            data: "https://i.pravatar.cc/200",
        },
        bgColor: {
            r: 0xff,
            g: 0xff,
            b: 0xff,
            a: 0,
        },
    },
    {
        id: uuidV4(),
        size: {
            width: 300,
            height: 300,
        },
        rotate: 0,
        scale: {
            x: 1,
            y: 1,
        },
        position: {
            left: 50,
            top: 50,
        },
        type: TypeBlock.image,
        bgImage: {
            type: "Path",
            data: stars,
        },
        bgColor: {
            r: 0xff,
            g: 0xff,
            b: 0xff,
            a: 0,
        },
    },
    {
        id: uuidV4(),
        size: {
            width: 300,
            height: 300,
        },
        rotate: 0,
        scale: {
            x: 1,
            y: 1,
        },
        position: {
            left: 50,
            top: 50,
        },
        type: TypeBlock.image,
        bgImage: {
            type: "Path",
            data: stars,
        },
        bgColor: {
            r: 0xff,
            g: 0xff,
            b: 0xff,
            a: 0,
        },
    },
];

export const artBlockSource: Array<ArtBlockType> = [
    {
        id: uuidV4(),
        size: {
            width: 50,
            height: 50,
        },
        rotate: 0,
        scale: {
            x: 1,
            y: 1,
        },
        position: {
            left: 40,
            top: 40,
        },
        type: TypeBlock.art,
        borderColor: {
            r: 0xaa,
            g: 0xaa,
            b: 0xaa,
            a: 1,
        },
        artName: ArtName.like,
        bgColor: {
            r: 0x25,
            g: 0x00,
            b: 0xff,
            a: 0,
        },
    },
    {
        id: uuidV4(),
        size: {
            width: 300,
            height: 250,
        },
        rotate: 0,
        scale: {
            x: 1,
            y: 1,
        },
        position: {
            left: 375,
            top: 0,
        },
        type: TypeBlock.art,
        borderColor: {
            r: 0x00,
            g: 0xff,
            b: 0x00,
            a: 1,
        },
        artName: ArtName.quote,
        bgColor: {
            r: 0x25,
            g: 0x00,
            b: 0xff,
            a: 0,
        },
    },
];

export const templateSource: Array<Template> = [
    {
        id: uuidV4(),
        preview: previewTemplate0,
        canvas: {
            id: uuidV4(),
            type: TypeBlock.canvas,
            size: {
                width: 800,
                height: 600,
            },
            filter: {
                r: 0x0,
                g: 0x0,
                b: 0x0,
                a: 0,
            },
            bgImage: {
                type: "",
                data: "",
            },
            bgColor: {
                r: 0xff,
                g: 0xff,
                b: 0xff,
                a: 1,
            },
        },
        blocks: [],
    },
    {
        id: uuidV4(),
        preview: previewTemplate1,
        canvas: {
            id: uuidV4(),
            type: TypeBlock.canvas,
            size: {
                width: 800,
                height: 600,
            },
            filter: {
                r: 0x10,
                g: 0x0,
                b: 0x0,
                a: 0,
            },
            bgImage: {
                type: "Path",
                data: santa,
            },
            bgColor: {
                r: 0xf6,
                g: 0xf2,
                b: 0xc0,
                a: 0,
            },
        },
        blocks: [textBlockSource[1]],
    },
    {
        id: uuidV4(),
        preview: previewTemplate2,
        canvas: {
            id: uuidV4(),
            type: TypeBlock.canvas,
            size: {
                width: 800,
                height: 600,
            },
            filter: {
                r: 0x0,
                g: 0x0,
                b: 0x0,
                a: 0,
            },
            bgImage: {
                type: "Path",
                data: snowFir,
            },
            bgColor: {
                r: 0xff,
                g: 0xff,
                b: 0xff,
                a: 1,
            },
        },
        blocks: [textBlockSource[2]],
    },
    {
        id: uuidV4(),
        preview: previewTemplate3,
        canvas: {
            id: uuidV4(),
            type: TypeBlock.canvas,
            size: {
                width: 800,
                height: 600,
            },
            filter: {
                r: 0x0,
                g: 0x0,
                b: 0x0,
                a: 0,
            },
            bgImage: {
                type: "Path",
                data: flowers,
            },
            bgColor: {
                r: 0xff,
                g: 0xff,
                b: 0xff,
                a: 1,
            },
        },
        blocks: [textBlockSource[3]],
    },
    {
        id: uuidV4(),
        preview: previewTemplate4,
        canvas: {
            id: uuidV4(),
            type: TypeBlock.canvas,
            size: {
                width: 800,
                height: 600,
            },
            filter: {
                r: 0x0,
                g: 0x0,
                b: 0x0,
                a: 0,
            },
            bgImage: {
                type: "Path",
                data: frame,
            },
            bgColor: {
                r: 0xff,
                g: 0xff,
                b: 0xff,
                a: 1,
            },
        },
        blocks: [textBlockSource[3]],
    },
    {
        id: uuidV4(),
        preview: previewTemplate5,
        canvas: {
            id: uuidV4(),
            type: TypeBlock.canvas,
            size: {
                width: 800,
                height: 600,
            },
            filter: {
                r: 0x0,
                g: 0x0,
                b: 0x0,
                a: 0,
            },
            bgImage: {
                type: "Path",
                data: mountain,
            },
            bgColor: {
                r: 0xff,
                g: 0xff,
                b: 0xff,
                a: 1,
            },
        },
        blocks: [],
    },
];

const session: Session = {
    selectedBlocks: [],
    template: templateSource[2],
};

export default session;
