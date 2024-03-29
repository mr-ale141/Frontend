enum ArtName {
    quote,
    circle,
    square,
    rect,
    line,
    arrow,
    like,
}

type Position = {
    left: number;
    top: number;
};

type Size = {
    width: number;
    height: number;
};

enum TypeBlock {
    art,
    text,
    image,
    canvas,
}

type Image = {
    type: "link" | "base64" | "path" | "";
    data: string;
    size: Size;
};

type Color = {
    r: number;
    g: number;
    b: number;
    a: number;
};

type Rotate = number;

type Scale = {
    x: number;
    y: number;
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
    rotate: Rotate;
    scale: Scale;
};

type TextBlockType = Block & {
    positionText: {
        justifyContent: "center" | "start" | "end";
        alignItems: "center" | "start" | "end";
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
    preview: string;
    canvas: CanvasType;
    blocks: Array<ArtBlockType | TextBlockType | ImageBlockType>;
};

type Session = {
    selectedBlocks: Array<string>;
    template: Template;
};

export type {
    TextBlockType,
    ImageBlockType,
    ArtBlockType,
    Template,
    CanvasType,
    Session,
    Color,
    Size,
    Rotate,
    Scale,
    Position,
    Image,
};

export { ArtName, TypeBlock };
