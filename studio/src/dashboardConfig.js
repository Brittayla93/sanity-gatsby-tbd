export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6146a22a9fd22965e17af72d",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-tbd-studio",
                  apiId: "b74e4c36-d99d-4c61-aa8f-e97aad84ebf2",
                },
                {
                  buildHookId: "6146a22a1d7f094bf6fc9640",
                  title: "Blog Website",
                  name: "sanity-gatsby-tbd",
                  apiId: "4e78d7a8-30c1-4725-8804-9dca84c6bd51",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Brittayla93/sanity-gatsby-tbd",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-tbd.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
