import {
    ArtObject,
    TextBlock,
    ImageBlock,
    ArtBlock,
    Template,
    DeltaHistory,
    Session,
} from "../type/type.js";

const artObjectSource: Array<ArtObject> = [
    {
        name: "quote",
        svg_data: "../components/art/quote/quote.svg",
    },
    {
        name: "circle",
        svg_data: "../components/art/circle/circle.svg",
    },
    {
        name: "square",
        svg_data: "../components/art/square/square.svg",
    },
    {
        name: "rectangle",
        svg_data: "../components/art/rectangle/rectangle.svg",
    },
    {
        name: "line",
        svg_data: "../components/art/line/line.svg",
    },
    {
        name: "arrow",
        svg_data: "../components/art/arrow/arrow.svg",
    },
    {
        name: "like",
        svg_data: "../components/art/like/like.svg",
    },
];

const textBlockSource: Array<TextBlock> = [
    {
        id: "tmp2_txt_blk_1",
        size: {
            width: 200,
            height: 100,
        },
        position: {
            x: 50,
            y: 150,
        },
        type: "text",
        text: {
            value: "Template TEXT",
            fontSize: 14,
            fontFamily: "Arial",
            color: {
                r: 0x0,
                g: 0x0,
                b: 0x0,
                a: 0,
            },
            bold: true,
            cursive: true,
            underline: false,
        },
        background: {
            r: 0xff,
            g: 0xff,
            b: 0xff,
            a: 0,
        },
    },
];

const imageBlockSource: Array<ImageBlock> = [
    {
        id: "tmp3_img_blk_1",
        size: {
            width: 300,
            height: 100,
        },
        position: {
            x: 250,
            y: 400,
        },
        type: "image",
        img: {
            type: "base64",
            data: "./img/base64/logo.txt",
        },
    },
];

const artBlockSource: Array<ArtBlock> = [
    {
        id: "tmp4_art_blk_1",
        size: {
            width: 100,
            height: 100,
        },
        position: {
            x: 300,
            y: 300,
        },
        type: "art",
        border_color: {
            r: 0xff,
            g: 0x00,
            b: 0x00,
            a: 1,
        },
        art_name: artObjectSource[1].name,
        background: {
            r: 0xff,
            g: 0xff,
            b: 0xff,
            a: 1,
        },
    },
];

const templateSource: Array<Template> = [
    {
        id: "tmp1",
        canvas: {
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
            background: {
                r: 0xff,
                g: 0xff,
                b: 0xff,
                a: 1,
            },
        },
        blocks: [],
    },
    {
        id: "tmp2",
        canvas: {
            size: {
                width: 1024,
                height: 720,
            },
            filter: {
                r: 0x10,
                g: 0x0,
                b: 0x0,
                a: 0,
            },
            background: {
                r: 0xff,
                g: 0x00,
                b: 0xff,
                a: 1,
            },
        },
        blocks: [textBlockSource[0]],
    },
    {
        id: "tmp3",
        canvas: {
            size: {
                width: 1366,
                height: 768,
            },
            filter: {
                r: 0x0,
                g: 0x0,
                b: 0x0,
                a: 0,
            },
            background: {
                r: 0xff,
                g: 0xff,
                b: 0xff,
                a: 1,
            },
        },
        blocks: [imageBlockSource[0]],
    },
    {
        id: "tmp4",
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
            background: {
                r: 0xff,
                g: 0xff,
                b: 0xff,
                a: 1,
            },
        },
        blocks: [artBlockSource[0]],
    },
];

const selectedTemplate = templateSource[0];

const userBlocks: Array<TextBlock | ImageBlock | ArtBlock> = [
    {
        id: "blk1",
        size: {
            width: 800,
            height: 600,
        },
        position: {
            x: 0,
            y: 0,
        },
        type: "image",
        img: {
            type: "link",
            data: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2ZyYnV0dG9uc19oYW5kX2xhYm9yX3Nldy1pbWFnZS1reWJlMzY3eS5qcGc.jpg",
        },
    },
];

selectedTemplate.blocks = userBlocks;

const cmd: DeltaHistory = {
    object: "blk1",
    field: "position",
    operation: "update",
    newValue: { x: 10, y: 50 },
};

const session: Session = {
    editHistory: [
        {
            object: "tmp1",
            field: "",
            operation: "choose",
            newValue: {},
        },
        {
            object: "blk1",
            field: "",
            operation: "create",
            newValue: {},
        },
        {
            object: "blk1",
            field: "img",
            operation: "update",
            newValue: {
                type: "link",
                data: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2ZyYnV0dG9uc19oYW5kX2xhYm9yX3Nldy1pbWFnZS1reWJlMzY3eS5qcGc.jpg",
            },
        },
    ],
    selectedBlocks: ["blk1"],
    template: selectedTemplate,
    file_name: "max_file.card",
};

export {
    artObjectSource,
    textBlockSource,
    imageBlockSource,
    artBlockSource,
    templateSource,
    selectedTemplate,
    userBlocks,
    cmd,
    session,
};
