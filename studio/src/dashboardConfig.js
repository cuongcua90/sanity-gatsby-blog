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
                    "611dabf879eaf55369511797",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-852wvhce",
                  apiId: "9183e28a-3711-41c9-b72a-aec50e648f6f",
                },
                {
                  buildHookId: "611dabf82322ce4980d67759",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-udyze1bu",
                  apiId: "a93bd479-7321-472b-ad6b-b6f41afd3fac",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/cuongcua90/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-udyze1bu.netlify.app",
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
