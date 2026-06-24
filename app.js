/* ====================================================
   InfluenceHub — Lógica e Dados do Protótipo (SPA)
   ==================================================== */

// ── DADOS MOCKADOS ───────────────────────────────────
const INFLUENCERS = [
  {
    id: 1,
    name: "Mariana Costa",
    handle: "@marianacosta",
    niche: "Lifestyle",
    location: "São Paulo, SP",
    followers: "2.4M",
    followersRaw: 2400000,
    engagement: "8.7%",
    engagementRaw: 8.7,
    price: "R$ 8.500",
    priceRaw: 8500,
    avatar: "🦋",
    bgGradient: "linear-gradient(135deg, #7C3AFF, #00D4FF)",
    bio: "Criadora de conteúdo focada em lifestyle sustentável e moda consciente. Parceira de marcas que acreditam em impacto positivo e conexões verdadeiras.",
    tags: ["Lifestyle", "Sustentabilidade", "Mega"],
    platforms: { instagram: "1.8M", tiktok: "420K", youtube: "180K" }
  },
  {
    id: 2,
    name: "Lucas Tech & Dev",
    handle: "@lucastech",
    niche: "Tech",
    location: "Belo Horizonte, MG",
    followers: "420K",
    followersRaw: 4200000,
    engagement: "6.2%",
    engagementRaw: 6.2,
    price: "R$ 4.200",
    priceRaw: 4200,
    avatar: "💻",
    bgGradient: "linear-gradient(135deg, #00D4FF, #00E96A)",
    bio: "Reviewer de tecnologia, desenvolvedor e entusiasta de inteligência artificial. Simplificando a tecnologia para mais de 400 mil apaixonados por inovação.",
    tags: ["Tech", "Gadgets", "AI"],
    platforms: { instagram: "120K", tiktok: "200K", youtube: "100K" }
  },
  {
    id: 3,
    name: "Gabriela Becker",
    handle: "@gabi_becker",
    niche: "Fitness",
    location: "Rio de Janeiro, RJ",
    followers: "1.2M",
    followersRaw: 1200000,
    engagement: "9.5%",
    engagementRaw: 9.5,
    price: "R$ 7.000",
    priceRaw: 7000,
    avatar: "🏋️",
    bgGradient: "linear-gradient(135deg, #FFB800, #FF4D6A)",
    bio: "Atleta profissional e mentora de hábitos saudáveis. Compartilho minha rotina de treinos, alimentação equilibrada e dicas para uma mente sã.",
    tags: ["Fitness", "Saúde", "Macro"],
    platforms: { instagram: "800K", tiktok: "400K" }
  },
  {
    id: 4,
    name: "Felipe Designer",
    handle: "@felipeart",
    niche: "Moda",
    location: "São Paulo, SP",
    followers: "850K",
    followersRaw: 850000,
    engagement: "5.8%",
    engagementRaw: 5.8,
    price: "R$ 5.500",
    priceRaw: 5500,
    avatar: "🎨",
    bgGradient: "linear-gradient(135deg, #FF4D6A, #7C3AFF)",
    bio: "Diretor criativo e fotógrafo de moda. Exploro o estilo urbano e minimalista com estéticas visuais únicas e colaborações de alto padrão.",
    tags: ["Moda", "Fotografia", "Estilo"],
    platforms: { instagram: "600K", youtube: "250K" }
  },
  {
    id: 5,
    name: "Chef Thiago Silveira",
    handle: "@thiago_gastronomia",
    niche: "Gastronomia",
    location: "Porto Alegre, RS",
    followers: "310K",
    followersRaw: 310000,
    engagement: "7.9%",
    engagementRaw: 7.9,
    price: "R$ 3.000",
    priceRaw: 3000,
    avatar: "🍳",
    bgGradient: "linear-gradient(135deg, #00E96A, #FFB800)",
    bio: "Gastronomia descomplicada para o dia a dia. Receitas práticas, reviews de restaurantes e experiências culinárias ao redor do Brasil.",
    tags: ["Culinária", "Dicas", "Micro"],
    platforms: { instagram: "250K", tiktok: "60K" }
  },
  {
    id: 6,
    name: "Beatriz pelo Mundo",
    handle: "@biatravel",
    niche: "Viagem",
    location: "Florianópolis, SC",
    followers: "950K",
    followersRaw: 950000,
    engagement: "8.1%",
    engagementRaw: 8.1,
    price: "R$ 6.200",
    priceRaw: 6200,
    avatar: "✈️",
    bgGradient: "linear-gradient(135deg, #7C3AFF, #FFB800)",
    bio: "Viajante profissional e criadora de roteiros exclusivos. Compartilho dicas de viagens baratas, hotéis de luxo e aventuras pelo globo.",
    tags: ["Viagem", "Aventura", "Roteiros"],
    platforms: { instagram: "500K", tiktok: "450K" }
  }
];

const CAMPAIGNS = [
  {
    id: 1,
    brand: "NaturalSkin Co.",
    campaign: "Lançamento Creme Facial Vegano",
    influencer: "Mariana Costa",
    avatar: "🦋",
    value: "R$ 8.500",
    status: "proposta",
    due: "15 Jul 2026",
    progress: 0
  },
  {
    id: 2,
    brand: "GamerHardware",
    campaign: "Review Headset Pro X",
    influencer: "Lucas Tech & Dev",
    avatar: "💻",
    value: "R$ 4.200",
    status: "proposta",
    due: "20 Jul 2026",
    progress: 0
  },
  {
    id: 3,
    brand: "FitApp Brasil",
    campaign: "Desafio 30 Dias Saudável",
    influencer: "Gabriela Becker",
    avatar: "🏋️",
    value: "R$ 14.000",
    status: "producao",
    due: "05 Jul 2026",
    progress: 60
  },
  {
    id: 4,
    brand: "UrbanOutfitters",
    campaign: "Lookbook Inverno 2026",
    influencer: "Felipe Designer",
    avatar: "🎨",
    value: "R$ 11.000",
    status: "producao",
    due: "12 Jul 2026",
    progress: 30
  },
  {
    id: 5,
    brand: "Sabores do Sul",
    campaign: "Patrocínio Especial de Inverno",
    influencer: "Chef Thiago Silveira",
    avatar: "🍳",
    value: "R$ 6.000",
    status: "aguardando",
    due: "Amanhã",
    progress: 95
  },
  {
    id: 6,
    brand: "FlyVoos",
    campaign: "Roteiro Nordeste Sustentável",
    influencer: "Beatriz pelo Mundo",
    avatar: "✈️",
    value: "R$ 12.400",
    status: "finalizado",
    due: "Concluído",
    progress: 100
  }
];

const INITIAL_CHATS = [
  {
    id: 1,
    name: "Mariana Costa",
    avatar: "🦋",
    online: true,
    unread: 2,
    messages: [
      { sender: "them", text: "Olá! Vi a proposta de vocês para a campanha de lançamento da NaturalSkin Co. Fiquei super interessada!", time: "10:30" },
      { sender: "own", text: "Olá Mariana! Que ótimo ouvir isso. Acreditamos que seu perfil tem tudo a ver com o nosso propósito de beleza natural.", time: "10:34" },
      { sender: "them", text: "Sim! Eu adorei o briefing. Só queria ver se o valor da proposta cobre os 3 Stories adicionais que vocês solicitaram.", time: "10:41" },
      { sender: "them", text: "Geralmente eu cobro uma taxa extra para pacotes de Stories extras, mas podemos fechar um valor especial se for recorrente.", time: "10:42" }
    ]
  },
  {
    id: 2,
    name: "Lucas Tech & Dev",
    avatar: "💻",
    online: true,
    unread: 0,
    messages: [
      { sender: "own", text: "Oi Lucas, conseguimos enviar o produto para teste hoje. Você prefere a cor cinza ou preta?", time: "Ontem" },
      { sender: "them", text: "Fala pessoal! Se puder ser a preta, combina mais com o setup dos vídeos. Valeu pelo envio!", time: "Ontem" }
    ]
  },
  {
    id: 3,
    name: "Gabriela Becker",
    avatar: "🏋️",
    online: false,
    unread: 0,
    messages: [
      { sender: "them", text: "Briefing recebido e aprovado! Vou iniciar os roteiros dos reels amanhã cedo.", time: "2 dias atrás" },
      { sender: "own", text: "Excelente Gabriela! Ficamos no aguardo dos primeiros rascunhos para aprovação.", time: "2 dias atrás" }
    ]
  }
];

// ── VARIÁVEIS DE ESTADO ──────────────────────────────
let currentRole = "empresa";
let currentView = "search";
let selectedInfluencerId = 1;
let currentChatId = 1;
let filterNiche = "Todos";
let mockChats = [...INITIAL_CHATS];
let mockCampaigns = [...CAMPAIGNS];

// ── INICIALIZAÇÃO ────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderInfluencerGrid();
  renderKanbanBoard();
  renderChatList();
  renderChatMessages();
  drawAllCharts();
  
  // Set default profile details
  selectInfluencer(1);
});

// ── ROTEAMENTO SPA ───────────────────────────────────
function navigate(viewId) {
  currentView = viewId;
  
  // Hide all screens
  document.querySelectorAll(".view").forEach(view => {
    view.classList.remove("active");
  });
  
  // Show target screen
  const targetView = document.getElementById(`view-${viewId}`);
  if (targetView) targetView.classList.add("active");
  
  // Update navbar state
  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("data-view") === viewId) {
      link.classList.add("active");
    }
  });

  // Re-draw graphs if moving to screens that contain them
  if (viewId === 'profile' || viewId === 'inf-dash') {
    setTimeout(drawAllCharts, 50);
  }
  
  window.scrollTo(0, 0);
}

// ── TOGGLE ROLE (EMPRESA / INFLUENCER) ────────────────
function setRole(role) {
  currentRole = role;
  
  const empToggle = document.getElementById("role-empresa");
  const infToggle = document.getElementById("role-influencer");
  const empNav = document.getElementById("nav-links-empresa");
  const infNav = document.getElementById("nav-links-influencer");
  
  if (role === "empresa") {
    empToggle.classList.add("active");
    infToggle.classList.remove("active");
    empNav.classList.remove("hidden");
    infNav.classList.add("hidden");
    navigate("search");
  } else {
    empToggle.classList.remove("active");
    infToggle.classList.add("active");
    empNav.classList.add("hidden");
    infNav.classList.remove("hidden");
    navigate("inf-dash");
  }
  
  showToast(`⚡ Alternado para visão de: ${role === "empresa" ? "Empresa" : "Influenciador"}`);
}

// ── BUSCA E FILTROS ──────────────────────────────────
function toggleFilter(element, niche) {
  document.querySelectorAll(".filter-chip").forEach(chip => {
    chip.classList.remove("active");
  });
  element.classList.add("active");
  filterNiche = niche;
  filterInfluencers();
}

function filterInfluencers() {
  const query = document.getElementById("search-input").value.toLowerCase();
  
  const filtered = INFLUENCERS.filter(inf => {
    const matchesSearch = inf.name.toLowerCase().includes(query) || 
                          inf.handle.toLowerCase().includes(query) || 
                          inf.niche.toLowerCase().includes(query);
                          
    const matchesNiche = (filterNiche === "Todos" || inf.niche === filterNiche);
    
    return matchesSearch && matchesNiche;
  });
  
  renderInfluencerGrid(filtered);
  document.getElementById("results-count-num").innerText = filtered.length;
}

function updateRange(sliderId, labelId, suffix, baseNum) {
  const val = document.getElementById(sliderId).value;
  let displayVal = val;
  if (suffix === "K") {
    displayVal = Math.round(val * 10) + "K";
  } else if (suffix === "%") {
    displayVal = (val / 10).toFixed(1) + "%";
  }
  document.getElementById(labelId).innerText = displayVal;
  filterInfluencers();
}

// ── RENDERIZAÇÃO DE TEMPLATE: INFLUENCER CARDS ────────
function renderInfluencerGrid(list = INFLUENCERS) {
  const grid = document.getElementById("influencer-grid");
  if (!grid) return;
  grid.innerHTML = "";
  
  if (list.length === 0) {
    grid.innerHTML = `
      <div class="empty-state w-full" style="grid-column: 1 / -1">
        <div class="empty-icon">🔍</div>
        <div class="empty-title">Nenhum influenciador encontrado</div>
        <div class="empty-sub">Tente ajustar seus termos de busca ou filtros.</div>
      </div>
    `;
    return;
  }
  
  list.forEach(inf => {
    const card = document.createElement("div");
    card.className = "inf-card";
    card.onclick = () => selectInfluencer(inf.id);
    
    card.innerHTML = `
      <div class="inf-card-cover">
        <div class="inf-card-cover-bg" style="background: ${inf.bgGradient}"></div>
        <div class="inf-card-cover-pattern"></div>
        <div class="inf-card-niche-badge">${inf.niche}</div>
        <div class="inf-card-verified">✓</div>
      </div>
      <div class="inf-card-body">
        <div class="inf-card-avatar-wrap">
          <div class="inf-avatar" style="background: ${inf.bgGradient}">
            ${inf.avatar}
          </div>
          <div class="inf-quick-follow" onclick="event.stopPropagation(); startChatWith(${inf.id})" title="Enviar Mensagem">💬</div>
        </div>
        <div class="inf-name">${inf.name}</div>
        <div class="inf-handle">${inf.handle}</div>
        <div class="inf-location">📍 ${inf.location}</div>
        
        <div class="inf-metrics">
          <div class="metric-cell">
            <div class="metric-value">${inf.followers}</div>
            <div class="metric-label">Seguidores</div>
          </div>
          <div class="metric-cell">
            <div class="metric-value highlight">${inf.engagement}</div>
            <div class="metric-label">Engajamento</div>
          </div>
          <div class="metric-cell">
            <div class="metric-value">${inf.price}</div>
            <div class="metric-label">Média/Post</div>
          </div>
        </div>
        
        <div class="inf-card-actions">
          <button class="btn btn-ghost btn-sm btn-full" onclick="event.stopPropagation(); selectInfluencer(${inf.id})">🔍 Ver Perfil</button>
          <button class="btn btn-primary btn-sm btn-full" onclick="event.stopPropagation(); openProposalFromCard(${inf.id})">🚀 Propor Campanha</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ── SELEÇÃO DE PERFIL / VITRINE ─────────────────────
function selectInfluencer(id) {
  selectedInfluencerId = id;
  const inf = INFLUENCERS.find(x => x.id === id);
  if (!inf) return;
  
  // Update view profile bindings
  document.getElementById("profile-name-display").innerText = inf.name;
  document.getElementById("profile-handle-display").innerText = `${inf.handle} · ${inf.location}`;
  document.getElementById("profile-bio-display").innerText = inf.bio;
  document.getElementById("profile-avatar-emoji").innerText = inf.avatar;
  document.getElementById("profile-avatar-display").style.background = inf.bgGradient;
  document.getElementById("profile-price-display").innerText = inf.price;
  document.getElementById("profile-loc-display").innerText = inf.location;
  document.getElementById("profile-niche-display").innerText = inf.niche;
  
  document.getElementById("profile-stat-seg").innerText = inf.followers;
  
  // Set tags
  const tagsWrap = document.getElementById("profile-tags-display");
  tagsWrap.innerHTML = "";
  inf.tags.forEach(t => {
    const b = document.createElement("span");
    b.className = `badge badge-primary`;
    b.innerText = t;
    tagsWrap.appendChild(b);
  });
  
  navigate("profile");
}

function switchProfileTab(tabName, btn) {
  // Toggle buttons
  btn.parentElement.querySelectorAll(".profile-tab").forEach(t => t.classList.remove("active"));
  btn.classList.add("active");
  
  // Toggle panels
  document.getElementById("tab-overview").classList.add("hidden");
  document.getElementById("tab-performance").classList.add("hidden");
  document.getElementById("tab-cases").classList.add("hidden");
  document.getElementById("tab-reviews").classList.add("hidden");
  
  document.getElementById(`tab-${tabName}`).classList.remove("hidden");
}

// ── RENDERIZAÇÃO DO KANBAN DE CAMPANHAS ──────────────
function renderKanbanBoard() {
  const colProposta = document.getElementById("col-proposta");
  const colProducao = document.getElementById("col-producao");
  const colAguardando = document.getElementById("col-aguardando");
  const colFinalizado = document.getElementById("col-finalizado");
  
  if (!colProposta) return;
  
  // Clear lists
  colProposta.innerHTML = "";
  colProducao.innerHTML = "";
  colAguardando.innerHTML = "";
  colFinalizado.innerHTML = "";
  
  mockCampaigns.forEach(c => {
    const card = document.createElement("div");
    card.className = "kcard";
    card.onclick = () => showToast(`📋 Campanha: ${c.campaign}`);
    
    // Select column target
    let targetCol = colProposta;
    let progressBarClass = "background: var(--primary)";
    
    if (c.status === "producao") {
      targetCol = colProducao;
      progressBarClass = "background: var(--warning)";
    } else if (c.status === "aguardando") {
      targetCol = colAguardando;
      progressBarClass = "background: var(--accent)";
    } else if (c.status === "finalizado") {
      targetCol = colFinalizado;
      progressBarClass = "background: var(--success)";
    }
    
    card.innerHTML = `
      <div class="kcard-header">
        <div>
          <div class="kcard-brand">${c.brand}</div>
          <div class="kcard-campaign">${c.campaign}</div>
        </div>
      </div>
      <div class="kcard-inf-row">
        <div class="kcard-inf-avatar">${c.avatar}</div>
        <div class="kcard-inf-name">${c.influencer}</div>
      </div>
      <div class="kcard-footer">
        <div class="kcard-value">${c.value}</div>
        <div class="kcard-due">${c.due}</div>
      </div>
      <div class="progress-bar-wrap">
        <div class="progress-bar-fill" style="width: ${c.progress}%; ${progressBarClass}"></div>
      </div>
    `;
    
    targetCol.appendChild(card);
  });
}

// ── CHAT DIRETO / NEGOCIAÇÃO ─────────────────────────
function startChatWith(infId) {
  const inf = INFLUENCERS.find(x => x.id === infId);
  if (!inf) return;
  
  // Check if chat already exists
  let chat = mockChats.find(c => c.name === inf.name);
  if (!chat) {
    // Create new empty chat room
    chat = {
      id: mockChats.length + 1,
      name: inf.name,
      avatar: inf.avatar,
      online: true,
      unread: 0,
      messages: [
        { sender: "own", text: `Olá ${inf.name}! Gostamos muito do seu perfil e queremos negociar uma parceria publicitária.`, time: "Agora" }
      ]
    };
    mockChats.unshift(chat);
  }
  
  currentChatId = chat.id;
  renderChatList();
  renderChatMessages();
  navigate("chat");
}

function renderChatList() {
  const wrap = document.getElementById("chat-list");
  if (!wrap) return;
  wrap.innerHTML = "";
  
  mockChats.forEach(chat => {
    const item = document.createElement("div");
    item.className = `chat-item ${chat.id === currentChatId ? "active" : ""}`;
    item.onclick = () => selectChat(chat.id);
    
    const lastMsg = chat.messages[chat.messages.length - 1];
    const previewText = lastMsg ? lastMsg.text : "Nenhuma mensagem.";
    const lastTime = lastMsg ? lastMsg.time : "";
    
    item.innerHTML = `
      <div class="chat-item-avatar">
        ${chat.avatar}
        ${chat.online ? '<div class="online-dot"></div>' : ''}
      </div>
      <div class="chat-item-meta">
        <div class="chat-item-name">${chat.name}</div>
        <div class="chat-item-preview">${previewText}</div>
      </div>
      <div class="chat-item-right">
        <div class="chat-item-time">${lastTime}</div>
        ${chat.unread > 0 ? `<div class="chat-item-unread">${chat.unread}</div>` : ''}
      </div>
    `;
    wrap.appendChild(item);
  });
}

function selectChat(id) {
  currentChatId = id;
  const chat = mockChats.find(c => c.id === id);
  if (chat) {
    chat.unread = 0;
    document.getElementById("chat-peer-name").innerText = chat.name;
    document.querySelector(".chat-main-header .chat-item-avatar").innerText = chat.avatar;
  }
  renderChatList();
  renderChatMessages();
}

function renderChatMessages() {
  const wrap = document.getElementById("chat-messages");
  if (!wrap) return;
  wrap.innerHTML = "";
  
  const chat = mockChats.find(c => c.id === currentChatId);
  if (!chat) return;
  
  chat.messages.forEach(msg => {
    const row = document.createElement("div");
    row.className = `msg-row ${msg.sender === "own" ? "own" : ""}`;
    
    row.innerHTML = `
      <div class="msg-avatar">${msg.sender === "own" ? "🏢" : chat.avatar}</div>
      <div class="msg-bubble">
        <div>${msg.text}</div>
        <div class="msg-time">${msg.time}</div>
      </div>
    `;
    wrap.appendChild(row);
  });
  
  // Auto scroll to bottom
  wrap.scrollTop = wrap.scrollHeight;
}

function handleChatKey(event) {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    sendMessage();
  }
}

function sendMessage() {
  const inp = document.getElementById("chat-input");
  const text = inp.value.trim();
  if (!text) return;
  
  const chat = mockChats.find(c => c.id === currentChatId);
  if (!chat) return;
  
  const now = new Date();
  const timeStr = now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  
  chat.messages.push({
    sender: "own",
    text: text,
    time: timeStr
  });
  
  inp.value = "";
  renderChatMessages();
  renderChatList();
  
  // Auto response simulation
  setTimeout(() => {
    chat.messages.push({
      sender: "them",
      text: "Entendido! Vou analisar as especificações e já retorno com uma contraproposta ou confirmação. 👍",
      time: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })
    });
    renderChatMessages();
    renderChatList();
    showToast(`💬 Nova mensagem de ${chat.name}`);
  }, 1800);
}

// ── MODAL DE PROPOSTAS ───────────────────────────────
let proposalTargetInf = null;

function openProposalFromCard(infId) {
  const inf = INFLUENCERS.find(x => x.id === infId);
  if (!inf) return;
  proposalTargetInf = inf;
  
  document.getElementById("modal-campanha").value = `Campanha com ${inf.name}`;
  document.getElementById("modal-orcamento").value = inf.price;
  document.getElementById("modal-empresa").value = "Minha Empresa S/A";
  
  document.getElementById("campaign-modal").classList.add("open");
}

function openModal() {
  document.getElementById("modal-campanha").value = "";
  document.getElementById("modal-orcamento").value = "";
  document.getElementById("modal-empresa").value = "";
  document.getElementById("campaign-modal").classList.add("open");
}

function closeModal() {
  document.getElementById("campaign-modal").classList.remove("open");
}

function closeModalOnBg(e) {
  if (e.target === document.getElementById("campaign-modal")) {
    closeModal();
  }
}

function submitProposal() {
  const campaignName = document.getElementById("modal-campanha").value.trim();
  const budget = document.getElementById("modal-orcamento").value.trim();
  const company = document.getElementById("modal-empresa").value.trim();
  
  if (!campaignName || !budget || !company) {
    showToast("⚠️ Por favor, preencha todos os campos obrigatórios.");
    return;
  }
  
  const infName = proposalTargetInf ? proposalTargetInf.name : "Mariana Costa";
  const infAvatar = proposalTargetInf ? proposalTargetInf.avatar : "🦋";
  
  const newCamp = {
    id: mockCampaigns.length + 1,
    brand: company,
    campaign: campaignName,
    influencer: infName,
    avatar: infAvatar,
    value: budget,
    status: "proposta",
    due: "Em análise",
    progress: 10
  };
  
  mockCampaigns.unshift(newCamp);
  renderKanbanBoard();
  
  closeModal();
  showToast("🚀 Proposta de campanha enviada com sucesso!");
  
  // Redirect to Kanban visual board
  setTimeout(() => {
    navigate("kanban");
  }, 1000);
}

// ── TOAST MESSAGES ───────────────────────────────────
function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;
  
  const toast = document.createElement("div");
  toast.className = "toast toast-success";
  toast.innerHTML = `
    <span class="toast-icon">✨</span>
    <span class="toast-msg">${message}</span>
  `;
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(20px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ── DESENHAR GRÁFICOS SVG PREMIUM ────────────────────
function drawAllCharts() {
  // Gráfico 1: Performance Alcance/Engajamento
  const reachSvg = document.getElementById("reach-chart");
  if (reachSvg) {
    drawPerformanceChart(reachSvg, [
      { reach: 40, eng: 30 },
      { reach: 65, eng: 45 },
      { reach: 80, eng: 75 },
      { reach: 95, eng: 60 },
      { reach: 110, eng: 85 },
      { reach: 140, eng: 95 },
      { reach: 180, eng: 120 }
    ]);
  }

  // Gráfico 2: Taxa de Engajamento Recente
  const engSvg = document.getElementById("eng-chart");
  if (engSvg) {
    drawSingleLineChart(engSvg, [4.2, 5.8, 6.1, 7.8, 8.2, 8.7]);
  }

  // Gráfico 3: Crescimento de Seguidores (Influenciador)
  const growthSvg = document.getElementById("growth-chart");
  if (growthSvg) {
    drawSingleLineChart(growthSvg, [2100, 2220, 2280, 2350, 2390, 2400], "#00D4FF");
  }
}

function drawPerformanceChart(svg, data) {
  svg.innerHTML = "";
  const w = 600;
  const h = 180;
  const padding = 20;
  const graphW = w - padding * 2;
  const graphH = h - padding * 2;
  
  const ptsCount = data.length;
  const stepX = graphW / (ptsCount - 1);
  
  // Calculate max values for scale
  const maxReach = Math.max(...data.map(d => d.reach));
  const maxEng = Math.max(...data.map(d => d.eng));
  
  // Build line path strings
  let reachPath = "";
  let engPath = "";
  
  data.forEach((pt, i) => {
    const x = padding + i * stepX;
    const yReach = h - padding - (pt.reach / maxReach) * graphH;
    const yEng = h - padding - (pt.eng / maxEng) * graphH;
    
    if (i === 0) {
      reachPath = `M ${x} ${yReach}`;
      engPath = `M ${x} ${yEng}`;
    } else {
      reachPath += ` L ${x} ${yReach}`;
      engPath += ` L ${x} ${yEng}`;
    }
  });

  // Render Grid lines
  for (let i = 0; i <= 4; i++) {
    const gy = padding + (graphH / 4) * i;
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", padding);
    line.setAttribute("y1", gy);
    line.setAttribute("x2", w - padding);
    line.setAttribute("y2", gy);
    line.setAttribute("stroke", "rgba(255,255,255,0.05)");
    line.setAttribute("stroke-width", "1");
    svg.appendChild(line);
  }
  
  // Draw Reach Area (gradient fill)
  let reachAreaPath = `${reachPath} L ${w - padding} ${h - padding} L ${padding} ${h - padding} Z`;
  const reachArea = document.createElementNS("http://www.w3.org/2000/svg", "path");
  reachArea.setAttribute("d", reachAreaPath);
  reachArea.setAttribute("fill", "url(#reachGradient)");
  reachArea.setAttribute("opacity", "0.15");
  svg.appendChild(reachArea);

  // Draw Reach Line
  const rLine = document.createElementNS("http://www.w3.org/2000/svg", "path");
  rLine.setAttribute("d", reachPath);
  rLine.setAttribute("fill", "none");
  rLine.setAttribute("stroke", "var(--primary-light)");
  rLine.setAttribute("stroke-width", "3");
  svg.appendChild(rLine);
  
  // Draw Eng Line
  const eLine = document.createElementNS("http://www.w3.org/2000/svg", "path");
  eLine.setAttribute("d", engPath);
  eLine.setAttribute("fill", "none");
  eLine.setAttribute("stroke", "var(--accent)");
  eLine.setAttribute("stroke-width", "3");
  svg.appendChild(eLine);
  
  // Gradient definitions inside SVG
  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  defs.innerHTML = `
    <linearGradient id="reachGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="var(--primary)" />
      <stop offset="100%" stop-color="transparent" />
    </linearGradient>
  `;
  svg.appendChild(defs);
}

function drawSingleLineChart(svg, dataPoints, strokeColor = "var(--primary-light)") {
  svg.innerHTML = "";
  const w = 600;
  const h = 180;
  const padding = 20;
  const graphW = w - padding * 2;
  const graphH = h - padding * 2;
  
  const maxVal = Math.max(...dataPoints);
  const minVal = Math.min(...dataPoints);
  const valRange = maxVal - minVal || 1;
  
  const stepX = graphW / (dataPoints.length - 1);
  let path = "";
  
  dataPoints.forEach((val, i) => {
    const x = padding + i * stepX;
    const y = h - padding - ((val - minVal) / valRange) * graphH;
    
    if (i === 0) {
      path = `M ${x} ${y}`;
    } else {
      path += ` L ${x} ${y}`;
    }
  });

  // Render Grid lines
  for (let i = 0; i <= 4; i++) {
    const gy = padding + (graphH / 4) * i;
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", padding);
    line.setAttribute("y1", gy);
    line.setAttribute("x2", w - padding);
    line.setAttribute("y2", gy);
    line.setAttribute("stroke", "rgba(255,255,255,0.05)");
    line.setAttribute("stroke-width", "1");
    svg.appendChild(line);
  }

  // Draw Area
  let areaPathStr = `${path} L ${w - padding} ${h - padding} L ${padding} ${h - padding} Z`;
  const area = document.createElementNS("http://www.w3.org/2000/svg", "path");
  area.setAttribute("d", areaPathStr);
  area.setAttribute("fill", "url(#singleGradient)");
  area.setAttribute("opacity", "0.15");
  svg.appendChild(area);
  
  // Draw Line
  const linePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  linePath.setAttribute("d", path);
  linePath.setAttribute("fill", "none");
  linePath.setAttribute("stroke", strokeColor);
  linePath.setAttribute("stroke-width", "3");
  svg.appendChild(linePath);
  
  // Defs
  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  defs.innerHTML = `
    <linearGradient id="singleGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${strokeColor}" />
      <stop offset="100%" stop-color="transparent" />
    </linearGradient>
  `;
  svg.appendChild(defs);
}
