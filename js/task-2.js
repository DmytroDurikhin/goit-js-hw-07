const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML(
  "beforeend", 
  images.map(({ url, alt }) => `<li class="gallery-item"><img src="${url}" alt="${alt}"></li>`).join("")
);

const style = document.createElement("style");
style.textContent = `

  .gallery {
    padding: 100px 156px;
    display: flex;
    flex-wrap: wrap;
    row-gap: 48px;
    column-gap: 24px;
    list-style: none;
    justify-content: center;
    
  }
  .gallery-item {
    
    max-width: calc((100% - 48px) / 3);
    overflow: hidden;
  }
  .gallery-item img {
    width: 100%;
    height: 100%;
    display: block;
  }
`;
document.head.appendChild(style);

