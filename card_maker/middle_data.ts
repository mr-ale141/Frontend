const textBlockHello: TextBlock = {
    id: "blk1",
    width: 50,
    hight: 14,
    posX: 0,
    posY: 0,
    type: "text",
    value: "Hello",
    fontSize: 12,
    fontFamily: "Arial",
    color: "000000",
    bold: false,
    cursive: true,
    underline: false,
    background: {
        type: "color",
        data: "FFFFFF",
    },
};

const imageBlockBase64: ImageBlock = {
    id: "blk2",
    width: 200,
    hight: 100,
    posX: 20,
    posY: 20,
    type: "image",
    data: {
        type: "base64",
        data: "base64_string",
    },
};

const artBlockQuote: ArtBlock = {
    id: "blk3",
    width: 50,
    hight: 50,
    posX: 100,
    posY: 100,
    type: "art",
    color: "FF0000",
    art_name: "quote",
    background: {
        type: "color",
        data: "FFFFFF",
    },
};

const templateMiddle: Template = {
    id: "tmp1",
    blocks: [],
};

const activBlockMiddle: ActivBlock = {
    id: "blk2",
};

const canvasMiddle: Canvas = {
    width: 800,
    hight: 600,
    filtr: "+450000",
    tamplate_id: "tmp1",
    blocks: [textBlockHello, imageBlockBase64, artBlockQuote],
    background: {
        type: "color",
        data: "FFFFFF",
    },
};

const sessionMiddle: Session = {
    selectedBlock: activBlockMiddle,
    canvas: canvasMiddle,
    file_name: "firstproject.stick",
};
