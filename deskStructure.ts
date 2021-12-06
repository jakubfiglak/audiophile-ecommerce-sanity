import S from "@sanity/desk-tool/structure-builder";
import { FaDatabase, FaDatabase as icon } from "react-icons/fa";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Global Data")
        .icon(FaDatabase)
        .child(S.document().schemaType("globalData").documentId("globalData")),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !["globalData"].includes(listItem.getId()!)
      ),
    ]);
