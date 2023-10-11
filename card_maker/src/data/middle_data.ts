import {
    ArtObject,
    TextBlock,
    ImageBlock,
    ArtBlock,
    Template,
    Canvas,
    DeltaHistory,
    Session,
} from "../type/type.js";

let artObjectExample: ArtObject;

const textBlockHello: TextBlock = {
    id: "blk1",
    position: {
        x: 0,
        y: 0,
    },
    size: {
        width: 50,
        height: 14,
    },
    type: "text",
    text: {
        value: "Hello",
        fontSize: 12,
        fontFamily: "Arial",
        color: { r: 0x00, g: 0x00, b: 0x00, a: 1 },
        bold: false,
        cursive: true,
        underline: false,
    },
    bgImage: {
        type: "",
        data: "",
    },
    bgColor: {
        r: 0x00,
        g: 0x00,
        b: 0x00,
        a: 1,
    },
};

const imageBlockBase64: ImageBlock = {
    id: "blk2",
    position: {
        x: 20,
        y: 20,
    },
    size: {
        width: 200,
        height: 100,
    },
    type: "image",
    bgImage: {
        type: "base64",
        data: "./img/base64/gofer.txt",
    },
};

const artBlockQuote: ArtBlock = {
    id: "blk3",
    position: {
        x: 100,
        y: 100,
    },
    size: {
        width: 50,
        height: 50,
    },
    type: "art",
    border_color: { r: 0xff, g: 0x00, b: 0x00, a: 1 },
    art_name: "quote",
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
};

const canvasMiddle: Canvas = {
    size: {
        width: 800,
        height: 600,
    },
    filter: { r: 0x45, g: 0x00, b: 0x00, a: 0 },
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
};

const templateMiddle: Template = {
    id: "tmp1",
    canvas: canvasMiddle,
    imageBlocks: [imageBlockBase64],
    textBlocks: [textBlockHello],
    artBlocks: [artBlockQuote],
};

const cmd: DeltaHistory = {
    object: "blk3",
    field: "position",
    operation: "update",
    newValue: {
        x: 250,
        y: 100,
    },
};

const sessionMiddle: Session = {
    editHistory: [],
    selectedBlocks: ["blk3"],
    template: templateMiddle,
    file_name: "project.stick",
};

export {
    artObjectExample,
    textBlockHello,
    artBlockQuote,
    canvasMiddle,
    templateMiddle,
    cmd,
    sessionMiddle,
};
