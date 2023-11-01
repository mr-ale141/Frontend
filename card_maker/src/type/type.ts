enum ArtName {
    quote,
    circle,
    square,
    rect,
    line,
    arrow,
    like,
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

type TextBlock = Block & {
    positionText: Position;
    type: "text";
    text: Text;
    bgImage: Image;
    bgColor: Color;
};

type ImageBlock = Block & {
    type: "image";
    bgImage: Image;
    bgColor: Color;
};

type ArtBlock = Block & {
    type: "art";
    borderColor: Color;
    artName: ArtName;
    bgColor: Color;
};

type CanvasType = {
    size: Size;
    filter: Color;
    bgImage: Image;
    bgColor: Color;
};

type Template = {
    id: string;
    canvas: CanvasType;
    blocks: Array<ArtBlock | TextBlock | ImageBlock>;
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
    TextBlock,
    ImageBlock,
    ArtBlock,
    Template,
    CanvasType,
    DeltaHistory,
    Session,
    Color,
    Size,
};

export { ArtName };
