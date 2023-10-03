type ArtObject = {
    name: string;
    svg_data: string;
};

type Image = {
    type: "link" | "base64";
    data: string;
};

type Position = {
    x: number;
    y: number;
};

type Size = {
    width: number;
    hight: number;
};

type Color = {
    r: number;
    g: number;
    b: number;
    a: number;
};

type Block = {
    id: string;
    position: Position;
    size: Size;
};

type TextBlock = Block & {
    type: "text";
    value: string;
    fontSize: number;
    fontFamily: string;
    color: Color;
    bold: boolean;
    cursive: boolean;
    underline: boolean;
    background: Image | Color;
};

type ImageBlock = Block & {
    type: "image";
    data: Image;
};

type ArtBlock = Block & {
    type: "art";
    border_color: Color;
    art_name: string;
    background: Image | Color;
};

type Template = {
    id: string;
    canvas: Canvas;
    blocks: Array<TextBlock | ImageBlock | ArtBlock>;
};

type Canvas = {
    size: Size;
    filtr: Color;
    background: Image | Color;
};

type DeltaHistory = {
    idBlock: string;
    field: string;
    newValue: string;
};

type Session = {
    editHistory: Array<DeltaHistory>;
    selectedBlocks: Array<string>;
    tamplate_id: string;
    file_name: string;
};
