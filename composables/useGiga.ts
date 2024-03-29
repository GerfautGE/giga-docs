/*
from :

[
    {
        title: "Docs",
        _path: "/docs",
        children: [
            {
            title: "Getting Started",
            _path: "/docs/getting-started",
            children: [
                {
                    title: "Installation",
                    _path: "/docs/getting-started/installation"
                }
            ]
        ]
    }
]

to :
[
    [
        {
            label: "Getting Started",
            to: "/docs/getting-started",
        }
]
*/

export const useGiga = () => {
  const execute = async () => {
    const { data: navigation } = await useAsyncData("navigation", () =>
      fetchContentNavigation(queryContent("docs")),
    );
    execute();
    console.log(navigation);
    return navigation;
  };
};
