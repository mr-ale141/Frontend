type ArtObject = {
    name: string,
    svg_data: string
}

type Background = {
    type: 'link'|'base64'|'color',
    data: string
}

type Block = {
    id: string,
    width: number,
    hight: number,
    posX: number,
    posY: number
}

type TextBlock = Block & {
    type: 'text',
    value: string,
    fontSize: number,
    fontFamily: string,
    color: string,
    bold: boolean,
    cursive: boolean,
    underline: boolean,
    background: Background
}

type ImageBlock = Block & {
    type: 'image',
    data: Background
}

type ArtBlock = Block & {
    type: 'art',
    color: string,
    art_name: string,
    background: Background
}

type Template = {
    id: string,
    blocks: Array<TextBlock | ImageBlock | ArtBlock>
}

type Canvas = {
    width: number,
    hight: number,
    filtr: string,
    tamplate_id: string,
    background: Background,
    blocks: Array<TextBlock | ImageBlock | ArtBlock>
}

type ActivBlock = {
    id: string
}

type Session = {
    selectedBlock: ActivBlock,
    canvas: Canvas,
    file_name: string
}