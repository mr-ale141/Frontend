type ArtObject = {
    name: string;
    svg_data: string;
};

type Image = {
    type: "link" | "base64" | "";
    data: string;
};

type Position = {
    x: number;
    y: number;
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
    bold: boolean;
    cursive: boolean;
    underline: boolean;
};

type Block = {
    id: string;
    position: Position;
    size: Size;
};

type TextBlock = Block & {
    type: "text";
    text: Text;
    bgImage: Image;
    bgColor: Color;
};

type ImageBlock = Block & {
    type: "image";
    bgImage: Image;
};

type ArtBlock = Block & {
    type: "art";
    border_color: Color;
    art_name: string;
    bgImage: Image;
    bgColor: Color;
};

type Canvas = {
    size: Size;
    filter: Color;
    bgImage: Image;
    bgColor: Color;
};

type Template = {
    id: string;
    canvas: Canvas;
    textBlocks: Array<TextBlock>;
    artBlocks: Array<ArtBlock>;
    imageBlocks: Array<ImageBlock>;
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
    ArtObject,
    TextBlock,
    ImageBlock,
    ArtBlock,
    Template,
    Canvas,
    DeltaHistory,
    Session,
};
