import { SelectOption } from "@gravity-ui/uikit";
import { ArtName } from "../../../../data/type/type";

const options: SelectOption<string>[] = [
    {
        content: "Arrow",
        value: ArtName.arrow.toString(),
    },
    {
        content: "Circle",
        value: ArtName.circle.toString(),
    },
    {
        content: "Like",
        value: ArtName.like.toString(),
    },
    {
        content: "Line",
        value: ArtName.line.toString(),
    },
    {
        content: "Quote",
        value: ArtName.quote.toString(),
    },
    {
        content: "Rectangle",
        value: ArtName.rect.toString(),
    },
    {
        content: "Square",
        value: ArtName.square.toString(),
    },
];

export default options;
