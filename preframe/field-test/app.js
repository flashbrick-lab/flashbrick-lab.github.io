const STORAGE_KEY = "preframe-field-test-v1";

const prepItems = [
  "用卷尺校验 Pro 手机 LiDAR：0.4、0.5、0.6、0.9、1、1.5、2、2.2、2.7、3、4m",
  "标记统一镜头位置；近距离场景不能把手机和实体相机并排摆放",
  "备齐三脚架、手机夹、定位板、卷尺、照度计/应用、胶带、灰/白/黑参考物和新电池",
  "MINI 99 关闭色彩、暗角和特殊模式，保持 N 档",
  "WIDE 400 与 WIDE 300 各装一盒相纸，中途不交换相纸盒"
];

const scenes = [
  {
    id: "S01", title: "强日光 · 远景", summary: "蓝天、树木、建筑；主体均在 3m 外", goal: "验证最高快门、天空高光，以及闪光对远景不再产生作用。", setup: "晴朗且光线稳定；同时包含蓝天、绿色植物和中灰建筑；所有镜头回到同一光学参考点。", note: "MINI 12 两张连拍之间不要改变构图。", shots: [
      ["S01-M12-R1", "MINI 12 · AUTO · 第 1 张"], ["S01-M12-R2", "MINI 12 · AUTO · 原位重复"], ["S01-M7S", "MINI 7S · 晴天档"], ["S01-W400", "WIDE 400 · Auto · 远景"], ["S01-W300", "WIDE 300 · N · 远景"]
    ]
  },
  {
    id: "S02", title: "日光正面照明 · 约 1m", summary: "玩具或人物，光线来自相机一侧", goal: "建立日光下肤色、色彩和亮度基准。", setup: "主体约 1m，背景保留少量天空或绿植；避免主体一半在阴影中。", note: "两台相机连续拍摄，尽量缩短光线变化。", shots: [["S02-M12", "MINI 12 · AUTO"], ["S02-W400", "WIDE 400 · Auto · 约 1m"]]
  },
  {
    id: "S03", title: "户外阴影 · 曝光档位标定", summary: "稳定均匀阴影，主体约 1m", goal: "标定 MINI 7S 四档，以及 SQ6、WIDE 300 的 D/N/L 档位差异。", setup: "这是最重要的曝光档位场景。主体和相机全程固定，避免斑驳阳光。", note: "WIDE 300 的 D/N/L 必须连续拍完，期间不要移动。", shots: [
      ["S03-M12", "MINI 12 · AUTO"], ["S03-M7S-H", "MINI 7S · 室内/房屋档"], ["S03-M7S-C", "MINI 7S · 阴天档"], ["S03-M7S-S", "MINI 7S · 小太阳档"], ["S03-M7S-B", "MINI 7S · 强日光档"],
      ["S03-SQ-D-A", "SQ6 · D · 自动闪光", true], ["S03-SQ-D-O", "SQ6 · D · 关闭闪光"], ["S03-SQ-N-A", "SQ6 · N · 自动闪光", true], ["S03-SQ-N-O", "SQ6 · N · 关闭闪光"], ["S03-SQ-L-A", "SQ6 · L · 自动闪光", true], ["S03-SQ-L-O", "SQ6 · L · 关闭闪光"],
      ["S03-W400", "WIDE 400 · Auto · 约 1m"], ["S03-W300-D", "WIDE 300 · D · 自动闪光", true], ["S03-W300-N", "WIDE 300 · N · 自动闪光", true], ["S03-W300-L", "WIDE 300 · L · 自动闪光", true]
    ]
  },
  {
    id: "S04", title: "户外逆光 · 约 1m", summary: "主体前脸在阴影，明亮天空作背景", goal: "观察天空造成的测光偏差，以及闪光对主体的补光效果。", setup: "太阳或亮天空在主体后方，主体正面处于阴影，距离约 1m。", note: "先拍完所有闪光对照，再继续其他镜头。", shots: [
      ["S04-M12", "MINI 12 · AUTO"], ["S04-M7S", "MINI 7S · 按天气选择档位"], ["S04-M99-F", "MINI 99 · N · 强制闪光"], ["S04-M99-O", "MINI 99 · N · 关闭闪光"],
      ["S04-SQ-D-A", "SQ6 · D · 自动闪光", true], ["S04-SQ-D-O", "SQ6 · D · 关闭闪光"], ["S04-SQ-N-A", "SQ6 · N · 自动闪光", true], ["S04-SQ-N-O", "SQ6 · N · 关闭闪光"], ["S04-SQ-L-A", "SQ6 · L · 自动闪光", true], ["S04-SQ-L-O", "SQ6 · L · 关闭闪光"],
      ["S04-W400", "WIDE 400 · Auto · 约 1m"], ["S04-W300-A", "WIDE 300 · N · 自动闪光", true], ["S04-W300-F", "WIDE 300 · N · 强制闪光"]
    ]
  },
  {
    id: "S05", title: "窗边侧光", summary: "主体约 1m，室内灯关闭", goal: "验证中等亮度、侧向反差和室内外色温交界。", setup: "主体在窗边，光从左侧或右侧照入；画面不要被窗户占满；关闭室内灯。", note: "云层明显改变亮度时暂停拍摄。", shots: [["S05-M12", "MINI 12 · AUTO"], ["S05-M7S", "MINI 7S · 按现场选择档位"], ["S05-W400", "WIDE 400 · Auto · 约 1m"]]
  },
  {
    id: "S06", title: "室内 · 单一灯源", summary: "主体约 1m，普通固定灯光", goal: "建立日常室内亮度和色彩基准，不作为混合光标定。", setup: "只保留一盏固定灯；主体约 1m，加入哑光白/灰/黑参考物；记录灯光偏暖、偏冷或未知。", note: "拍摄过程中灯和主体均不移动。", shots: [["S06-M12", "MINI 12 · AUTO"], ["S06-W400", "WIDE 400 · Auto · 约 1m"]]
  },
  {
    id: "S07", title: "弱光 · 近距离", summary: "EV100 5±0.5 / 60–110 lx", goal: "验证最小闪光输出、反光高光和最近对焦限制。", setup: "房间较暗但不是全黑。关闭顶灯，用稳定反射灯；主体处朝相机测得 60–110 lx。距离：MINI 12 为 0.4–0.5m，MINI 7S/SQ6 为 0.6m，WIDE 为 0.9m；使用哑光玩具并放一个轻微反光小物。", note: "普通明亮房间不合格；EV100 低于 3 的极暗环境不纳入本次测试。", lowLight: true, shots: [
      ["S07-M12-R1", "MINI 12 · 近摄模式 · 第 1 张"], ["S07-M12-R2", "MINI 12 · 近摄模式 · 原位重复"], ["S07-M7S", "MINI 7S · 室内/房屋档 · 约 0.6m"], ["S07-M99-F", "MINI 99 · N · 强制闪光 · 约 0.5m"], ["S07-M99-O", "MINI 99 · N · 关闭闪光 · 约 0.5m"],
      ["S07-SQ-D-A", "SQ6 · D · 自动闪光", true], ["S07-SQ-D-O", "SQ6 · D · 关闭闪光"], ["S07-SQ-N-A", "SQ6 · N · 自动闪光", true], ["S07-SQ-N-O", "SQ6 · N · 关闭闪光"], ["S07-SQ-L-A", "SQ6 · L · 自动闪光", true], ["S07-SQ-L-O", "SQ6 · L · 关闭闪光"],
      ["S07-W400", "WIDE 400 · Auto · 约 0.9m"], ["S07-W300", "WIDE 300 · N · 自动闪光 · 约 0.9m", true]
    ]
  },
  {
    id: "S08", title: "弱光 · 一米", summary: "EV100 5±0.5 / 60–110 lx / 精确 1m", goal: "建立主要闪光距离基准，比较主体亮度和补光。", setup: "主体精确 1m，关闭顶灯，用稳定反射灯；主体处 60–110 lx；亮度偏差超过 0.3EV 时调整或注明。", note: "这是整组弱光测试的主锚点，所有器材保持原位。", lowLight: true, shots: [["S08-M12", "MINI 12 · AUTO"], ["S08-M99-F", "MINI 99 · N · 强制闪光"], ["S08-M99-O", "MINI 99 · N · 关闭闪光"], ["S08-W400", "WIDE 400 · Auto · 1m"], ["S08-W300", "WIDE 300 · N · 自动闪光 · 1m", true]]
  },
  {
    id: "S09", title: "户外夜景 · 人物约 2m", summary: "稳定路灯，背景仍可辨认", goal: "验证约 2m 的闪光补光、背景保留、夜间自动曝光和光线衰减。", setup: "选择稳定路灯，避免近乎全黑；主体约 2m，背景同时有亮处和阴影；记录照度，避开车灯、频闪和移动人群。", note: "主体、相机和测光位置全程固定。", lowLight: true, shots: [
      ["S09-M12", "MINI 12 · AUTO"], ["S09-M7S", "MINI 7S · 室内/房屋档"], ["S09-M99-F", "MINI 99 · N · 强制闪光"], ["S09-M99-O", "MINI 99 · N · 关闭闪光"],
      ["S09-SQ-D-A", "SQ6 · D · 自动闪光", true], ["S09-SQ-D-O", "SQ6 · D · 关闭闪光"], ["S09-SQ-N-A", "SQ6 · N · 自动闪光", true], ["S09-SQ-N-O", "SQ6 · N · 关闭闪光"], ["S09-SQ-L-A", "SQ6 · L · 自动闪光", true], ["S09-SQ-L-O", "SQ6 · L · 关闭闪光"],
      ["S09-W400", "WIDE 400 · Auto · 2m"], ["S09-W300", "WIDE 300 · N · 自动闪光 · 2m", true]
    ]
  },
  {
    id: "S10", title: "户外夜景 · 远景", summary: "重要内容全部在 3m 外", goal: "验证闪光无法照亮远处时的曝光，以及手机闪光差分采集是否清晰。", setup: "选择稳定的街道、建筑、树木或灯牌；避免车辆和移动主体；重要内容全部超过 3m，画面需保留明暗层次并记录照度。", note: "这是夜间远距离关键测试。", lowLight: true, shots: [
      ["S10-M12", "MINI 12 · AUTO"], ["S10-M7S", "MINI 7S · 室内/房屋档"], ["S10-M99-F", "MINI 99 · N · 强制闪光"], ["S10-M99-O", "MINI 99 · N · 关闭闪光"],
      ["S10-SQ-D-A", "SQ6 · D · 自动闪光", true], ["S10-SQ-D-O", "SQ6 · D · 关闭闪光"], ["S10-SQ-N-A", "SQ6 · N · 自动闪光", true], ["S10-SQ-N-O", "SQ6 · N · 关闭闪光"], ["S10-SQ-L-A", "SQ6 · L · 自动闪光", true], ["S10-SQ-L-O", "SQ6 · L · 关闭闪光"],
      ["S10-W400", "WIDE 400 · Auto · 远景"], ["S10-W300", "WIDE 300 · N · 远景", true]
    ]
  }
];

const defaultState = () => ({ version: 2, prep: {}, shots: {} });
let state = loadState();

function loadState() {
  try { return { ...defaultState(), ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") }; }
  catch { return defaultState(); }
}

function saveState(message = "已自动保存") {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  const status = document.querySelector("#saveStatus");
  status.textContent = `${message} · ${new Date().toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" })}`;
  updateProgress();
}

function totalShots() { return scenes.reduce((sum, scene) => sum + scene.shots.length, 0); }
function completedShots() { return scenes.flatMap(s => s.shots).filter(([id]) => state.shots[id]?.done).length; }

function updateProgress() {
  const total = totalShots();
  const done = completedShots();
  const percent = Math.round(done / total * 100);
  document.querySelector("#progressCount").textContent = `${done} / ${total}`;
  document.querySelector("#progressPercent").textContent = `${percent}%`;
  document.querySelector("#progressBar").style.width = `${percent}%`;
  scenes.forEach(scene => {
    const sceneDone = scene.shots.filter(([id]) => state.shots[id]?.done).length;
    const card = document.querySelector(`#scene-${scene.id}`);
    const chip = document.querySelector(`[data-chip="${scene.id}"]`);
    if (card) card.querySelector(".scene-count").textContent = `${sceneDone}/${scene.shots.length}`;
    if (chip) chip.classList.toggle("done", sceneDone === scene.shots.length);
  });
  applyFilters();
}

function renderPrep() {
  const box = document.querySelector("#prepChecklist");
  prepItems.forEach((text, index) => {
    const label = document.createElement("label");
    label.className = "check-item";
    label.innerHTML = `<input type="checkbox" ${state.prep[index] ? "checked" : ""}><span>${text}</span>`;
    label.querySelector("input").addEventListener("change", event => { state.prep[index] = event.target.checked; saveState(); });
    box.append(label);
  });
}

function renderScenes() {
  const list = document.querySelector("#sceneList");
  const chips = document.querySelector("#sceneChips");
  const template = document.querySelector("#sceneTemplate");
  scenes.forEach(scene => {
    const chip = document.createElement("button");
    chip.className = "scene-chip";
    chip.dataset.chip = scene.id;
    chip.textContent = scene.id;
    chip.addEventListener("click", () => openScene(scene.id, true));
    chips.append(chip);

    const card = template.content.firstElementChild.cloneNode(true);
    card.id = `scene-${scene.id}`;
    card.dataset.search = `${scene.id} ${scene.title} ${scene.summary} ${scene.shots.map(x => x.join(" ")).join(" ")}`.toLowerCase();
    card.querySelector(".scene-code").textContent = scene.id;
    card.querySelector(".scene-title").textContent = scene.title;
    card.querySelector(".scene-summary").textContent = scene.summary;
    const header = card.querySelector(".scene-header");
    const body = card.querySelector(".scene-body");
    header.addEventListener("click", () => {
      const open = header.getAttribute("aria-expanded") !== "true";
      header.setAttribute("aria-expanded", String(open));
      body.hidden = !open;
    });
    card.querySelector(".scene-brief").innerHTML = `<div class="brief-row"><strong>目的</strong><span>${scene.goal}</span></div><div class="brief-row"><strong>布置</strong><span>${scene.setup}</span></div><div class="brief-row"><strong>注意</strong><span>${scene.note}</span></div>`;
    const shotBox = card.querySelector(".shots");
    scene.shots.forEach(shot => shotBox.append(makeShotRow(shot)));
    list.append(card);
  });
}

function makeShotRow([id, setting]) {
  const shotState = state.shots[id] ||= {};
  const row = document.createElement("div");
  row.className = `shot-row${shotState.done ? " completed" : ""}`;
  row.dataset.shotId = id;
  row.innerHTML = `<input class="shot-check" type="checkbox" aria-label="完成 ${friendlyShotId(id)}" ${shotState.done ? "checked" : ""}><div class="shot-copy"><span class="shot-id">${friendlyShotId(id)}</span><span class="shot-setting">${setting}</span></div>`;
  const checkbox = row.querySelector(".shot-check");
  checkbox.addEventListener("change", event => { shotState.done = event.target.checked; row.classList.toggle("completed", shotState.done); saveState(); });
  return row;
}

function friendlyShotId(id) {
  const cameraNames = { M12: "MINI 12", M7S: "MINI 7S", M99: "MINI 99", SQ: "SQ6", W400: "WIDE 400", W300: "WIDE 300" };
  const suffixNames = { R1: "第 1 张", R2: "第 2 张", H: "室内档", C: "阴天档", S: "小太阳档", B: "强日光档", D: "D 档", N: "N 档", L: "L 档", A: "自动闪光", O: "关闭闪光", F: "强制闪光" };
  const [scene, camera, ...suffixes] = id.split("-");
  return [scene, cameraNames[camera] || camera, ...suffixes.map(part => suffixNames[part] || part)].join(" · ");
}

function openScene(id, scroll) {
  const card = document.querySelector(`#scene-${id}`);
  if (!card) return;
  const header = card.querySelector(".scene-header");
  header.setAttribute("aria-expanded", "true");
  card.querySelector(".scene-body").hidden = false;
  if (scroll) card.scrollIntoView({ behavior: "smooth", block: "start" });
}

function applyFilters() {
  const query = (document.querySelector("#searchInput")?.value || "").trim().toLowerCase();
  const incompleteOnly = document.querySelector("#incompleteOnly")?.checked || false;
  scenes.forEach(scene => {
    const card = document.querySelector(`#scene-${scene.id}`);
    if (!card) return;
    const complete = scene.shots.every(([id]) => state.shots[id]?.done);
    card.classList.toggle("hidden", (query && !card.dataset.search.includes(query)) || (incompleteOnly && complete));
  });
}

function registerWebMCP() {
  const context = document.modelContext;
  if (!context?.registerTool) return;
  const register = tool => Promise.resolve(context.registerTool(tool)).catch(() => {});
  register({
    name: "read_test_progress", title: "读取实拍进度", description: "读取 PreFrame 实拍测试的总进度和每个场景的完成数量。",
    inputSchema: { type: "object", properties: {}, additionalProperties: false }, annotations: { readOnlyHint: true, untrustedContentHint: false },
    execute() { return { completed: completedShots(), total: totalShots(), scenes: scenes.map(scene => ({ id: scene.id, completed: scene.shots.filter(([id]) => state.shots[id]?.done).length, total: scene.shots.length })) }; }
  });
  register({
    name: "update_test_shots", title: "更新实拍项目", description: "批量把指定测试编号标记为完成或未完成，并同步更新页面和本机记录。",
    inputSchema: { type: "object", properties: { shotIds: { type: "array", items: { type: "string" }, minItems: 1 }, completed: { type: "boolean" } }, required: ["shotIds", "completed"], additionalProperties: false }, annotations: { readOnlyHint: false, untrustedContentHint: false },
    execute(input) {
      const validIds = new Set(scenes.flatMap(scene => scene.shots.map(([id]) => id)));
      if (!input || !Array.isArray(input.shotIds) || typeof input.completed !== "boolean" || input.shotIds.some(id => !validIds.has(id))) throw new Error("包含无效测试编号");
      input.shotIds.forEach(id => { (state.shots[id] ||= {}).done = input.completed; const row = document.querySelector(`[data-shot-id="${id}"]`); if (row) { row.classList.toggle("completed", input.completed); row.querySelector(".shot-check").checked = input.completed; } });
      saveState();
      return { updated: input.shotIds, completed: input.completed, progress: `${completedShots()}/${totalShots()}` };
    }
  });
}

document.querySelector("#searchInput").addEventListener("input", applyFilters);
document.querySelector("#incompleteOnly").addEventListener("change", applyFilters);

renderPrep();
renderScenes();
updateProgress();
registerWebMCP();
if ("serviceWorker" in navigator) navigator.serviceWorker.register("./sw.js").catch(() => {});

