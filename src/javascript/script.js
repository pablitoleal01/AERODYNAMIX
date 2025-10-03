document.addEventListener("DOMContentLoaded", () => {
  const mobilebotao = document.getElementById("mobile_botao");
  const mobileMenu = document.getElementById("mobile_menu");
  const closeMobilebotao = document.getElementById("close_mobile_botao");
  const navItems = document.querySelectorAll("#nav_list .nav-item a, #mobile_nav_list .nav-item a");
  const sections = document.querySelectorAll("section");

  mobilebotao.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    mobilebotao.querySelector("i").classList.toggle("fa-bars");
    mobilebotao.querySelector("i").classList.toggle("fa-x");
  });

  if (closeMobilebotao) {
    closeMobilebotao.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      mobilebotao.querySelector("i").classList.add("fa-bars");
      mobilebotao.querySelector("i").classList.remove("fa-x");
    });
  }

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      mobilebotao.querySelector("i").classList.add("fa-bars");
      mobilebotao.querySelector("i").classList.remove("fa-x");
    });
  });

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    document.querySelectorAll("#nav_list .nav-item, #mobile_nav_list .nav-item").forEach(li => {
      li.classList.remove("active");
      if (li.querySelector("a").getAttribute("href") === `#${current}`) {
        li.classList.add("active");
      }
    });
  });

  const accordionHeaders = document.querySelectorAll(".accordion-header");
  accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      content.classList.toggle("open");
      header.classList.toggle("active");
    });
  });
});

const produtoModal = document.getElementById("produto-modal");
const modalImagem = document.getElementById("modal-imagem");
const modalTitulo = document.getElementById("modal-titulo");
const modalDescricao = document.getElementById("modal-descricao");
const modalDetails = document.getElementById("modal-details");
const closeModal = document.querySelector(".close-modal");
const botoesFechar = document.querySelectorAll(".botao-default");

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
  nextImagem();
}, 5000);

function nextImagem(){
  count++;
  if(count>3){
    count=1
  }
  document.getElementById("radio"+count).checked = true;
}

const produtoData = {
  "DJI Avata 2": {
    img: "src/imagens/dji-avata-2.png",
    descricao: "Drone FPV de alta performance, voltado para voos imersivos e manobras acrobáticas, com câmera 12 MP em sensor 1/1.3″ que grava até 4K/100 fps.",
    details: [
      "Vem com controle ALT-X FPV",
      "Carregador rápido PowerHub 60W",
      "1 bateria de 2150 mAh",
      "Óculos FPV compatível",
      "Hélices extras e cabo USB-C"
    ]
  },
  "DJI Flip 2": {
    img: "src/imagens/dji-flip-2.jpg",
    descricao: "Drone compacto e dobrável, ideal para portabilidade com câmera 12 MP e gravação em 4K.",
    details: [
      "Vem com controle Flip RC",
      "Carregador MiniBoost 30W",
      "1 bateria leve",
      "Hélices extras e protetores",
      "Estojo de transporte incluso"
    ]
  },
  "DJI Matrice 400": {
    img: "src/imagens/dji-matrice-400.jpg",
    descricao: "Drone profissional robusto projetado para missões industriais e mapeamento aéreo com múltiplas opções de carga útil.",
    details: [
      "Controle M400 Pro RC",
      "Carregador Industrial 120W",
      "2 baterias de voo estendido",
      "Kit de montagem modular",
      "Módulo GPS duplo"
    ]
  },
  "DJI Mavic 4 Pro": {
    img: "src/imagens/dji-mavic-4-pro.webp",
    descricao: "Drone cinematográfico com gimbal 360°, câmeras Hasselblad 100 MP e autonomia de voo de até 51 minutos.",
    details: [
      "Controle M-Pro RC",
      "Carregador Turbo-Charge 100W",
      "2 baterias de alta capacidade",
      "Filtros ND",
      "Case protetora"
    ]
  },
  "DJI Mini 3": {
    img: "src/imagens/dji-mini-3.webp",
    descricao: "Drone ultra leve com gimbal vertical, gravação em 4K/30 fps e funções inteligentes.",
    details: [
      "Controle Mini RC-N1",
      "Carregador SmartCharge 20W",
      "1 bateria inteligente",
      "Hélices extras"
    ]
  },
  "DJI Mini 5 Pro": {
    img: "src/imagens/dji-mini-5-pro.webp",
    descricao: "Drone leve topo de linha com sensor de 1″ 50 MP, gravação 4K/60 fps HDR e detecção omnidirecional.",
    details: [
      "Controle RC 2 integrado",
      "Carregador PowerStation 60W",
      "1 bateria padrão + 1 bateria Plus",
      "Filtros ND",
      "Case premium"
    ]
  }
};

document.querySelectorAll(".produto-card, #produtos .botao-default").forEach(item => {
  item.addEventListener("click", e => {
    const card = e.currentTarget.closest(".produto-card");
    const produtoName = card.querySelector("h3").textContent;

    if (produtoData[produtoName]) {
      const data = produtoData[produtoName];
      modalImagem.src = data.img;
      modalTitulo.textContent = produtoName;
      modalDescricao.textContent = data.descricao;
      modalDetails.innerHTML = data.details.map(d => `<li>${d}</li>`).join("");
      produtoModal.style.display = "flex";
      document.body.style.overflow = "hidden";
    }
  });
});

closeModal.addEventListener("click", () => {
  produtoModal.style.display = "none";
  document.body.style.overflow = "auto";
});

window.addEventListener("click", e => {
  if (e.target === produtoModal) {
    produtoModal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

botoesFechar.forEach(botao => {
  botao.addEventListener("click", () => {
    produtoModal.style.display = "none";
    document.body.style.overflow = "auto";
  });
});