const $links = document.getElementById('links');
const $name = document.querySelector('h1');
const $description = document.querySelector('h2');

const data = {
  name: "Ariscode",
  nickname: "@arisbyte",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper lectus a venenatis aliquam.",
  avatar: "...",
  social: [
    {
      name: "twitter",
      url: "https://twitter.com/",
      username: "arisbyte",
    },
    {
      name: "instagram",
      url: "https://instagram.com/",
      username: "arisbyte",
    },
  ],
  links: [
    {
      name: "blog",
      url: "#",
      color: "green",
      emoji: "📗",
    },
    {
      name: "proyectos",
      url: "#",
      color: "gray",
      emoji: "⚙️",
    },
  ],
  footer: "Made with time",
};

const main = () => {
  let name = document.createTextNode(data?.name);
  let description = document.createTextNode(data?.description);
  let links = data?.links?.map((link) => {
    return `<div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
          <a class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer"
            href="${link.url}" target="_blank">
            ${link.name}
          </a>
          <span>${link.emoji}</span>
        </div>`;
  }).join('');
  let newItem = document.createElement("Section");
  newItem.innerHTML = links;
  $links.appendChild(newItem);
  $name.appendChild(name);
  $description.appendChild(description);
}

main()