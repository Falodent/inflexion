export const extractPoints = (htmlString: string): string[] => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const firstUl = doc.querySelector("ul");

  return firstUl
    ? Array.from(firstUl.querySelectorAll("li")).map(
        (li) => li.textContent || ""
      )
    : [];
};
