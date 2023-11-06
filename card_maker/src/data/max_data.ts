import {
    ArtBlock,
    ArtName,
    ImageBlock,
    Session,
    Template,
    TextBlock,
} from "../type/type";
import stars from "./img/png/stars.png";

const textBlockSource: Array<TextBlock> = [
    {
        id: "txt0", // uid
        size: {
            width: 200,
            height: 130,
        },
        position: {
            left: 425,
            top: 40,
        },
        positionText: {
            left: 25,
            top: 40,
        },
        type: "text",
        text: {
            value: "I need Card Maker!!!",
            fontSize: 14,
            fontFamily: "Arial",
            color: {
                r: 0xff,
                g: 0x00,
                b: 0x0,
                a: 1,
            },
            fontWeight: 800,
            fontStyle: "italic",
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
            a: 1,
        },
    },
];

const imageBlockSource: Array<ImageBlock> = [
    {
        id: "img0",
        size: {
            width: 300,
            height: 300,
        },
        position: {
            left: 150,
            top: 150,
        },
        type: "image",
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
        id: "img1",
        size: {
            width: 300,
            height: 300,
        },
        position: {
            left: 50,
            top: 50,
        },
        type: "image",
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
        id: "img2",
        size: {
            width: 50,
            height: 50,
        },
        position: {
            left: 10,
            top: 10,
        },
        type: "image",
        bgImage: {
            type: "",
            data: "stars.png",
        },
        bgColor: {
            r: 0xff,
            g: 0xff,
            b: 0xff,
            a: 0,
        },
    },
];

const artBlockSource: Array<ArtBlock> = [
    {
        id: "art0",
        size: {
            width: 300,
            height: 250,
        },
        position: {
            left: 150,
            top: 0,
        },
        type: "art",
        borderColor: {
            r: 0xff,
            g: 0x00,
            b: 0x00,
            a: 1,
        },
        artName: ArtName.quote,
        bgColor: {
            r: 0x00,
            g: 0x25,
            b: 0xff,
            a: 1,
        },
    },
];

const templateSource: Array<Template> = [
    {
        id: "tmp0",
        canvas: {
            size: {
                width: 700,
                height: 500,
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
                a: 0,
            },
        },
        blocks: [],
    },
    {
        id: "tmp1",
        canvas: {
            size: {
                width: 700,
                height: 500,
            },
            filter: {
                r: 0x10,
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
                g: 0x00,
                b: 0xff,
                a: 0,
            },
        },
        blocks: [imageBlockSource[0], artBlockSource[0], textBlockSource[0]],
    },
    {
        id: "tmp2",
        canvas: {
            size: {
                width: 400,
                height: 400,
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
        blocks: [imageBlockSource[1]],
    },
    {
        id: "tmp3",
        canvas: {
            size: {
                width: 297,
                height: 210,
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
        blocks: [artBlockSource[0]],
    },
];

const session: Session = {
    editHistory: [],
    selectedBlocks: ["txt0", "img0", "art0"],
    template: templateSource[1],
    file_name: "max_file.card",
};

export default session;
