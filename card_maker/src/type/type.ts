enum ArtName {
    quote,
    circle,
    square,
    rect,
    line,
    arrow,
    like,
}

enum TypeBlock {
    art,
    text,
    image,
    canvas,
}

type Image = {
    type: "link" | "base64" | "Path" | "";
    data: string;
};

type Position = {
    left: number;
    top: number;
};

type Size = {
    width: number;
    height: number;
};

type Color = {
    r: number;
    g: number;
    b: number;
    a: number;
};

type Text = {
    value: string;
    fontSize: number;
    fontFamily: string;
    color: Color;
    fontWeight: number;
    fontStyle: string;
    textDecoration: string;
};

type Block = {
    id: string;
    position: Position;
    size: Size;
};

type TextBlockType = Block & {
    positionText: {
        justifyContent: string;
        alignItems: string;
    };
    type: TypeBlock.text;
    text: Text;
    bgImage: Image;
    bgColor: Color;
};

type ImageBlockType = Block & {
    type: TypeBlock.image;
    bgImage: Image;
    bgColor: Color;
};

type ArtBlockType = Block & {
    type: TypeBlock.art;
    borderColor: Color;
    artName: ArtName;
    bgColor: Color;
};

type CanvasType = {
    id: string;
    type: TypeBlock.canvas;
    size: Size;
    filter: Color;
    bgImage: Image;
    bgColor: Color;
};

type Template = {
    id: string;
    canvas: CanvasType;
    blocks: Array<ArtBlockType | TextBlockType | ImageBlockType>;
};

type DeltaHistory = {
    object: string;
    field: string;
    operation: string;
    newValue: object;
};

type Session = {
    editHistory: Array<DeltaHistory>;
    selectedBlocks: Array<string>;
    template: Template;
    file_name: string;
};

export type {
    TextBlockType,
    ImageBlockType,
    ArtBlockType,
    Template,
    CanvasType,
    DeltaHistory,
    Session,
    Color,
    Size,
    Position,
    Image,
};

export { ArtName, TypeBlock };
