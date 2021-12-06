import S from "@sanity/desk-tool/structure-builder";
import { FaDatabase, FaMusic, FaHeadphones } from "react-icons/fa";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Global Data")
        .icon(FaDatabase)
        .child(S.document().schemaType("globalData").documentId("globalData")),
      S.divider(),
      S.listItem()
        .title("Categories")
        .icon(FaMusic)
        .child(
          S.list()
            .title("Categories")
            .items([
              orderableDocumentListDeskItem({
                type: "category",
                title: "Orderable Categories",
              }),
            ])
        ),
      S.listItem()
        .title("Products")
        .icon(FaHeadphones)
        .child(
          S.list()
            .title("Products")
            .items([
              S.listItem()
                .title("Products by Category")
                .child(
                  S.documentTypeList("category")
                    .title("Products by Category")
                    .child((categoryId) =>
                      S.documentList()
                        .title("Products")
                        .filter(
                          '_type == "product" && $categoryId == category._ref'
                        )
                        .params({ categoryId })
                    )
                ),
              orderableDocumentListDeskItem({
                type: "product",
                title: "Orderable Products",
              }),
            ])
        ),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["globalData", "category", "product"].includes(listItem.getId()!)
      ),
    ]);
