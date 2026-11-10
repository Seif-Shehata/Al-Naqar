const STORAGE = {
  products: 'souqly_products',
  users: 'souqly_users',
  cart: 'souqly_cart',
  lang: 'souqly_lang',
  session: 'souqly_session'
};

const image = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=84`;
const seedProducts = [
  { id: 'p1', nameEn: 'Linen Everyday Tote', nameAr: 'حقيبة كتان يومية', descEn: 'A structured carry-all made for slow mornings and busy days.', descAr: 'حقيبة عملية وأنيقة مصممة لكل يوم.', price: 42, discount: 34, category: 'Bags', image: image('photo-1542291026-7eec264c27ff'), createdAt: '2026-09-01' },
  { id: 'p2', nameEn: 'Sage Ceramic Set', nameAr: 'طقم سيراميك سيج', descEn: 'Hand-finished cups with a quiet, earthy glaze.', descAr: 'أكواب مصنوعة يدوياً بطلاء ترابي هادئ.', price: 58, discount: null, category: 'Home', image: image('photo-1514228742587-6b1558fcca3d'), createdAt: '2026-09-08' },
  { id: 'p3', nameEn: 'Solstice Knit', nameAr: 'كنزة سولستيس', descEn: 'A soft knit layer in an easy, warm neutral.', descAr: 'قطعة محبوكة ناعمة بلون دافئ ومحايد.', price: 76, discount: 62, category: 'Apparel', image: image('photo-1434389677669-e08b4cac3105'), createdAt: '2026-09-13' },
  { id: 'p4', nameEn: 'Noor Table Lamp', nameAr: 'مصباح نور للطاولة', descEn: 'Soft ambient light for desks, shelves, and late-night ideas.', descAr: 'إضاءة ناعمة للمكاتب والرفوف والأفكار المتأخرة.', price: 94, discount: null, category: 'Home', image: image('photo-1507473885765-e6ed057f782c'), createdAt: '2026-09-19' },
  { id: 'p5', nameEn: 'Aster Candle', nameAr: 'شمعة أستر', descEn: 'Notes of cedar, fig, and a little bit of rain.', descAr: 'نفحات الأرز والتين ولمسة من رائحة المطر.', price: 28, discount: 22, category: 'Wellness', image: image('photo-1603006905003-be475563bc59'), createdAt: '2026-10-03' },
  { id: 'p6', nameEn: 'Daily Objects Journal', nameAr: 'دفتر الأشياء اليومية', descEn: 'A tactile place to gather thoughts, lists, and loose ends.', descAr: 'مساحة ملموسة للأفكار والقوائم والتفاصيل اليومية.', price: 19, discount: null, category: 'Stationery', image: image('photo-1544947950-fa07a98d237f'), createdAt: '2026-10-11' }
];

const seedUsers = [
  { id: 'u1', name: 'Maya Rahman', email: 'admin@souqly.com', password: 'admin123', role: 'admin', permissions: { add: true, edit: true, manage: true } },
  { id: 'u2', name: 'Omar Haddad', email: 'staff@souqly.com', password: 'staff123', role: 'staff', permissions: { add: true, edit: true, manage: false } }
];

const translations = {
  en: {
    shop: 'Shop', categories: 'Categories', about: 'Our story', signIn: 'Sign in', admin: 'Workspace', language: 'العربية', search: 'Search the collection...', cart: 'Cart', items: 'items', heroEyebrow: 'Curated for your everyday', heroTitle: 'Make room for the good stuff.', heroBody: 'Small-batch objects, thoughtful details, and a little more joy in the everyday.', explore: 'Explore collection', teamLogin: 'Team login', browseBy: 'Browse by category', all: 'All pieces', featured: 'Fresh from Souqly', viewAll: 'View all', addToCart: 'Add to cart', added: 'Added to cart', sale: 'Sale', noResults: 'No pieces found', noResultsBody: 'Try a different search or category.', footer: 'A thoughtful marketplace for everyday objects.', cartTitle: 'Your cart', cartEmpty: 'Your cart is still light.', cartEmptyBody: 'Add something you love and it will show up here.', subtotal: 'Subtotal', checkout: 'Continue to checkout', remove: 'Remove', loginTitle: 'Welcome back.', loginBody: 'Sign in to manage the Souqly workspace.', email: 'Email address', password: 'Password', signInCta: 'Sign in to workspace', demo: 'Demo access', demoAdmin: 'Admin: admin@souqly.com / admin123', demoStaff: 'Staff: staff@souqly.com / staff123', invalidLogin: 'Email or password is incorrect.', dashboard: 'Dashboard', products: 'Products', staff: 'Staff & permissions', logout: 'Log out', overview: 'Overview', productCount: 'Products', staffCount: 'Team members', cartValue: 'Cart value', liveCatalog: 'in live catalog', activeUsers: 'active workspace users', fromOrders: 'from current cart', recentProducts: 'Recently added', recentProductsBody: 'Your latest catalog updates', quickActions: 'Quick actions', quickActionsBody: 'Keep the catalog moving', addProduct: 'Add a product', manageProducts: 'Manage products', inviteStaff: 'Invite team member', dashboardTitle: 'Good to see you,', dashboardBody: 'A clear view of what is happening across your catalog.', manageTitle: 'Product management', manageBody: 'Add, edit, and keep your catalog feeling fresh.', productSearch: 'Search products...', name: 'Name', category: 'Category', price: 'Price', status: 'Status', actions: 'Actions', live: 'Live', edit: 'Edit', delete: 'Delete', deleteConfirm: 'Delete this product?', editProduct: 'Edit product', newProduct: 'New product', productFormBody: 'Give your next piece a clear, confident home.', nameEnglish: 'Product name · English', nameArabic: 'Product name · Arabic', descriptionEnglish: 'Description · English', descriptionArabic: 'Description · Arabic', regularPrice: 'Regular price', discountPrice: 'Discount price', optional: 'Optional', imageUrl: 'Product image URL', uploadImage: 'Upload image', imageHint: 'JPG, PNG, or WebP. Stored locally for this demo.', saveProduct: 'Save product', cancel: 'Cancel', productSaved: 'Product saved.', productDeleted: 'Product deleted.', requiredFields: 'Please complete the required fields.', staffTitle: 'Staff & permissions', staffBody: 'Invite teammates and decide how much of the workspace they can touch.', addStaff: 'Add team member', addStaffBody: 'Create a LocalStorage-backed workspace account.', fullName: 'Full name', role: 'Role', staffRole: 'Staff member', permissionTitle: 'Product permissions', permissionAdd: 'Add products', permissionEdit: 'Edit products and prices', permissionManage: 'Manage and delete products', createStaff: 'Create staff account', staffSaved: 'Team member added.', userExists: 'That email is already in the workspace.', adminOnly: 'Only the primary Administrator can manage staff.', loggedOut: 'You have been signed out.', checkoutSoon: 'Checkout is ready for your next payment integration.', noPermission: 'You do not have permission to access this area.', navHome: 'Storefront', navAdmin: 'Admin', roleAdmin: 'Administrator', roleStaff: 'Staff', close: 'Close'
  },
  ar: {
    shop: 'المتجر', categories: 'التصنيفات', about: 'قصتنا', signIn: 'تسجيل الدخول', admin: 'مساحة العمل', language: 'English', search: 'ابحث في المجموعة...', cart: 'السلة', items: 'منتجات', heroEyebrow: 'مختارات ليومك', heroTitle: 'اترك مساحة للأشياء الجميلة.', heroBody: 'منتجات صغيرة الدفعات، تفاصيل مدروسة، وقليل من الفرح في كل يوم.', explore: 'اكتشف المجموعة', teamLogin: 'دخول الفريق', browseBy: 'تصفح حسب التصنيف', all: 'كل القطع', featured: 'وصل حديثاً إلى سوقلي', viewAll: 'عرض الكل', addToCart: 'أضف إلى السلة', added: 'تمت الإضافة', sale: 'خصم', noResults: 'لم نجد نتائج', noResultsBody: 'جرّب بحثاً أو تصنيفاً مختلفاً.', footer: 'سوق مدروس للأشياء اليومية.', cartTitle: 'سلتك', cartEmpty: 'سلتك ما زالت خفيفة.', cartEmptyBody: 'أضف شيئاً يعجبك وسيظهر هنا.', subtotal: 'المجموع الفرعي', checkout: 'المتابعة إلى الدفع', remove: 'إزالة', loginTitle: 'مرحباً بعودتك.', loginBody: 'سجّل الدخول لإدارة مساحة عمل سوقلي.', email: 'البريد الإلكتروني', password: 'كلمة المرور', signInCta: 'الدخول إلى مساحة العمل', demo: 'بيانات تجريبية', demoAdmin: 'المدير: admin@souqly.com / admin123', demoStaff: 'الموظف: staff@souqly.com / staff123', invalidLogin: 'البريد الإلكتروني أو كلمة المرور غير صحيحة.', dashboard: 'لوحة التحكم', products: 'المنتجات', staff: 'الفريق والصلاحيات', logout: 'تسجيل الخروج', overview: 'نظرة عامة', productCount: 'المنتجات', staffCount: 'أعضاء الفريق', cartValue: 'قيمة السلة', liveCatalog: 'في المتجر الآن', activeUsers: 'مستخدمون نشطون', fromOrders: 'من السلة الحالية', recentProducts: 'المضاف حديثاً', recentProductsBody: 'آخر تحديثات الكتالوج', quickActions: 'إجراءات سريعة', quickActionsBody: 'حافظ على حيوية الكتالوج', addProduct: 'أضف منتجاً', manageProducts: 'إدارة المنتجات', inviteStaff: 'دعوة عضو للفريق', dashboardTitle: 'سعيدون برؤيتك،', dashboardBody: 'رؤية واضحة لما يحدث في كتالوجك.', manageTitle: 'إدارة المنتجات', manageBody: 'أضف وعدّل وحافظ على حيوية منتجاتك.', productSearch: 'ابحث عن المنتجات...', name: 'الاسم', category: 'التصنيف', price: 'السعر', status: 'الحالة', actions: 'الإجراءات', live: 'نشط', edit: 'تعديل', delete: 'حذف', deleteConfirm: 'حذف هذا المنتج؟', editProduct: 'تعديل المنتج', newProduct: 'منتج جديد', productFormBody: 'امنح منتجك القادم مكاناً واضحاً وواثقاً.', nameEnglish: 'اسم المنتج · الإنجليزية', nameArabic: 'اسم المنتج · العربية', descriptionEnglish: 'الوصف · الإنجليزية', descriptionArabic: 'الوصف · العربية', regularPrice: 'السعر الأساسي', discountPrice: 'سعر الخصم', optional: 'اختياري', imageUrl: 'رابط صورة المنتج', uploadImage: 'رفع صورة', imageHint: 'JPG أو PNG أو WebP. تُحفظ محلياً لهذا العرض.', saveProduct: 'حفظ المنتج', cancel: 'إلغاء', productSaved: 'تم حفظ المنتج.', productDeleted: 'تم حذف المنتج.', requiredFields: 'يرجى إكمال الحقول المطلوبة.', staffTitle: 'الفريق والصلاحيات', staffBody: 'أضف أعضاء الفريق وحدد مقدار ما يمكنهم إدارته.', addStaff: 'إضافة عضو للفريق', addStaffBody: 'أنشئ حساب مساحة عمل محفوظاً في LocalStorage.', fullName: 'الاسم الكامل', role: 'الدور', staffRole: 'عضو فريق', permissionTitle: 'صلاحيات المنتجات', permissionAdd: 'إضافة المنتجات', permissionEdit: 'تعديل المنتجات والأسعار', permissionManage: 'إدارة وحذف المنتجات', createStaff: 'إنشاء حساب الموظف', staffSaved: 'تمت إضافة عضو الفريق.', userExists: 'هذا البريد موجود مسبقاً في مساحة العمل.', adminOnly: 'المدير الأساسي فقط يمكنه إدارة الفريق.', loggedOut: 'تم تسجيل الخروج.', checkoutSoon: 'الدفع جاهز لربط بوابة الدفع القادمة.', noPermission: 'لا تملك صلاحية الوصول إلى هذه المنطقة.', navHome: 'المتجر', navAdmin: 'الإدارة', roleAdmin: 'مدير أساسي', roleStaff: 'موظف', close: 'إغلاق'
  }
};

let products = load(STORAGE.products, seedProducts);
let users = load(STORAGE.users, seedUsers);
let cart = load(STORAGE.cart, []);
const state = { lang: localStorage.getItem(STORAGE.lang) || 'en', search: '', category: 'all', cartOpen: false, editingId: null, productSearch: '', imageDraft: '' };
const GOOGLE_CLIENT_ID = window.SOUQLY_GOOGLE_CLIENT_ID || '';
const googleLabel = () => state.lang === 'ar' ? 'المتابعة باستخدام Google' : 'Continue with Google';
const googleSetupMessage = () => state.lang === 'ar' ? 'يحتاج تسجيل Google إلى إعداد Client ID أولاً.' : 'Google sign-in needs a Google OAuth Client ID first.';
const googleSuccessMessage = () => state.lang === 'ar' ? 'تم تسجيل الدخول باستخدام Google.' : 'Signed in with Google.';

function load(key, fallback) {
  try { const saved = JSON.parse(localStorage.getItem(key)); return saved ?? fallback; } catch { return fallback; }
}
function save(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
function t(key) { return translations[state.lang][key] || translations.en[key] || key; }
function esc(value = '') { return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[char])); }
function money(value) { return new Intl.NumberFormat(state.lang === 'ar' ? 'ar-SA' : 'en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(Number(value) || 0); }
function activeUser() { return load(STORAGE.session, null); }
function localName(product) { return state.lang === 'ar' ? (product.nameAr || product.nameEn) : product.nameEn; }
function localDescription(product) { return state.lang === 'ar' ? (product.descAr || product.descEn) : product.descEn; }
function route() { return (location.hash.replace(/^#/, '') || '/').split('?')[0]; }
function initials(name = '') { return name.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase(); }
function cartCount() { return cart.reduce((total, line) => total + line.qty, 0); }
function cartTotal() { return cart.reduce((total, line) => { const product = products.find((item) => item.id === line.id); return total + (product ? (product.discount || product.price) * line.qty : 0); }, 0); }
function isAdmin() { return activeUser()?.role === 'admin'; }
function can(permission) { const user = activeUser(); return user?.role === 'admin' || Boolean(user?.permissions?.[permission]); }

function setDocumentLanguage() {
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
}

function header({ storefront = false } = {}) {
  const user = activeUser();
  return `<header class="site-header"><div class="container header-inner">
    <a class="brand" href="#/"><span class="brand-mark">S</span><span>souqly<small>everyday, considered</small></span></a>
    <nav class="primary-nav" aria-label="Primary navigation">
      <a class="${storefront ? 'active' : ''}" href="#/shop">${t('shop')}</a>
      <a href="#/shop#categories">${t('categories')}</a>
      ${user ? `<a class="${!storefront ? 'active' : ''}" href="#/admin">${t('admin')}</a>` : `<a href="#/login">${t('signIn')}</a>`}
    </nav>
    <div class="header-actions">
      ${storefront ? `<label class="search-box"><span class="search-icon">⌕</span><input id="store-search" type="search" value="${esc(state.search)}" placeholder="${esc(t('search'))}" /></label>` : ''}
      <button class="language-button" data-action="toggle-language" aria-label="${esc(t('language'))}">◐ ${t('language')}</button>
      ${user ? `<button class="avatar" data-action="go-admin" title="${esc(user.name)}">${initials(user.name)}</button>` : ''}
      <button class="icon-button cart-button" data-action="open-cart" aria-label="${esc(t('cart'))}"><svg class="cart-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1"></circle><circle cx="18" cy="20" r="1"></circle><path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 8H6.1"></path></svg><span class="cart-count">${cartCount()}</span></button>
      <button class="icon-button mobile-menu" data-action="toggle-nav" aria-label="Menu">☰</button>
    </div>
  </div></header>`;
}

function storefront() {
  const categoryList = ['all', ...new Set(products.map((item) => item.category))];
  const filtered = products.filter((product) => {
    const term = state.search.trim().toLowerCase();
    const matchesTerm = !term || [product.nameEn, product.nameAr, product.category].some((value) => String(value).toLowerCase().includes(term));
    return matchesTerm && (state.category === 'all' || product.category === state.category);
  });
  return `<div class="app-shell">${header({ storefront: true })}<main class="store-main">
    <div class="container hero-wrap"><section class="hero">
      <div class="hero-copy"><div class="eyebrow">${t('heroEyebrow')}</div><h1>${t('heroTitle')}</h1><p>${t('heroBody')}</p><div class="form-actions"><a class="button button-primary" href="#shop">${t('explore')} <span>↗</span></a><a class="button button-ghost" href="#/login">${t('teamLogin')}</a></div></div><div class="hero-art" aria-hidden="true"></div>
    </section></div>
    <section class="container" id="categories"><div class="section-head"><div><div class="eyebrow">${t('categories')}</div><h2>${t('browseBy')}</h2></div><p>${products.length} ${t('items')}</p></div>
      <div class="category-row">${categoryList.map((category) => `<button class="category-chip ${state.category === category ? 'active' : ''}" data-action="category" data-category="${esc(category)}">${category === 'all' ? t('all') : esc(category)}</button>`).join('')}</div>
    </section>
    <section class="container" id="shop"><div class="section-head"><div><div class="eyebrow">${t('featured')}</div><h2>${t('featured')}</h2></div><button class="button button-ghost button-small" data-action="clear-filters">${t('viewAll')} ↗</button></div>
      <div class="product-grid" id="product-grid">${filtered.length ? filtered.map(productCard).join('') : `<div class="empty-state"><h3>${t('noResults')}</h3><p class="muted">${t('noResultsBody')}</p></div>`}</div>
    </section>
  </main><footer class="site-footer"><div class="container footer-inner"><span>© 2026 Souqly</span><span>${t('footer')}</span></div></footer>${state.cartOpen ? cartDrawer() : ''}</div>`;
}

function productCard(product) {
  const hasDiscount = Number(product.discount) > 0 && Number(product.discount) < Number(product.price);
  return `<article class="product-card"><div class="product-media"><img src="${esc(product.image)}" alt="${esc(localName(product))}" loading="lazy" />${hasDiscount ? `<span class="product-badge">${t('sale')}</span>` : ''}</div><div class="product-info"><div class="product-category">${esc(product.category)}</div><div class="product-title" title="${esc(localName(product))}">${esc(localName(product))}</div><div class="product-price-row"><span class="product-price">${money(hasDiscount ? product.discount : product.price)}</span>${hasDiscount ? `<span class="product-old-price">${money(product.price)}</span>` : ''}</div><button class="button button-soft button-small" data-action="add-cart" data-id="${esc(product.id)}">${t('addToCart')} <span>+</span></button></div></article>`;
}

function cartDrawer() {
  const lines = cart.map((line) => ({ line, product: products.find((product) => product.id === line.id) })).filter((entry) => entry.product);
  return `<div class="overlay" data-action="close-cart"><aside class="cart-drawer" data-drawer="true" role="dialog" aria-modal="true" aria-label="${esc(t('cartTitle'))}" onclick="event.stopPropagation()"><div class="drawer-head"><div><div class="eyebrow">${t('cart')}</div><h2>${t('cartTitle')}</h2></div><button class="icon-button" data-action="close-cart" aria-label="${esc(t('close'))}">×</button></div><div class="cart-items">${lines.length ? lines.map(({ line, product }) => `<div class="cart-line"><img src="${esc(product.image)}" alt="${esc(localName(product))}" /><div><div class="cart-line-name">${esc(localName(product))}</div><div class="cart-line-price">${money((product.discount || product.price) * line.qty)}</div><div class="qty-controls"><button data-action="cart-qty" data-id="${esc(product.id)}" data-delta="-1">−</button><strong>${line.qty}</strong><button data-action="cart-qty" data-id="${esc(product.id)}" data-delta="1">+</button></div></div><button class="remove-link" data-action="remove-cart" data-id="${esc(product.id)}">${t('remove')}</button></div>`).join('') : `<div class="empty-state"><h3>${t('cartEmpty')}</h3><p class="muted">${t('cartEmptyBody')}</p></div>`}</div><div class="drawer-footer"><div class="subtotal-row"><span>${t('subtotal')}</span><strong>${money(cartTotal())}</strong></div><button class="button button-primary" data-action="checkout">${t('checkout')} ↗</button></div></aside></div>`;
}

function loginPage() {
  return `<div class="app-shell">${header()}<main class="auth-page"><section class="auth-card"><div class="auth-mark">S</div><div class="eyebrow" style="margin-top: 22px;">${t('teamLogin')}</div><h1>${t('loginTitle')}</h1><p>${t('loginBody')}</p><button class="google-button" data-action="google-login" type="button"><span class="google-g">G</span><span>${googleLabel()}</span></button><div class="auth-divider"><span>${state.lang === 'ar' ? 'أو بالبريد الإلكتروني' : 'or use email'}</span></div><form id="login-form" class="form-grid"><div class="field"><label for="login-email">${t('email')}</label><input id="login-email" name="email" type="email" autocomplete="email" placeholder="you@souqly.com" required /></div><div class="field"><label for="login-password">${t('password')}</label><input id="login-password" name="password" type="password" autocomplete="current-password" placeholder="••••••••" required /></div><div id="login-error" class="field-error hide">${t('invalidLogin')}</div><button class="button button-primary" type="submit">${t('signInCta')} ↗</button></form><div class="demo-credentials"><strong>${t('demo')}</strong><span>${t('demoAdmin')}</span><br /><span>${t('demoStaff')}</span></div></section></main></div>`;
}

function adminShell(content, active) {
  const user = activeUser();
  const nav = [{ route: '/admin', label: t('overview'), icon: '◒' }, { route: '/admin/products', label: t('products'), icon: '▦' }, ...(isAdmin() ? [{ route: '/admin/staff', label: t('staff'), icon: '◎' }] : [])];
  return `<div class="app-shell">${header()}<div class="admin-app"><aside class="admin-sidebar"><div class="sidebar-label">${t('admin')}</div><nav class="sidebar-nav">${nav.map((item) => `<a class="${active === item.route ? 'active' : ''}" href="#${item.route}"><span class="sidebar-icon">${item.icon}</span>${item.label}</a>`).join('')}<a href="#/shop"><span class="sidebar-icon">↗</span>${t('navHome')}</a><a href="#/login" data-action="logout"><span class="sidebar-icon">⇥</span>${t('logout')}</a></nav></aside><main class="admin-content">${content}</main></div></div>`;
}

function dashboardPage() {
  const user = activeUser();
  return adminShell(`<div class="admin-topline"><div><div class="eyebrow">${t('overview')}</div><h1>${t('dashboardTitle')} ${esc(user.name.split(' ')[0])}.</h1><p>${t('dashboardBody')}</p></div><div class="admin-actions"><span class="role-pill ${user.role === 'admin' ? 'admin' : ''}">${user.role === 'admin' ? t('roleAdmin') : t('roleStaff')}</span><a class="button button-primary button-small" href="#/admin/products">${t('addProduct')} +</a></div></div><div class="metrics"><div class="metric-card"><span class="metric-accent"></span><div class="metric-label">${t('productCount')}</div><div class="metric-value">${products.length}</div><div class="metric-note">${t('liveCatalog')}</div></div><div class="metric-card"><span class="metric-accent" style="background: var(--mustard)"></span><div class="metric-label">${t('staffCount')}</div><div class="metric-value">${users.length}</div><div class="metric-note">${t('activeUsers')}</div></div><div class="metric-card"><span class="metric-accent" style="background: var(--teal)"></span><div class="metric-label">${t('cartValue')}</div><div class="metric-value">${money(cartTotal())}</div><div class="metric-note">${t('fromOrders')}</div></div></div><div class="dashboard-grid"><section class="panel"><div class="panel-head"><div><h2>${t('recentProducts')}</h2><p>${t('recentProductsBody')}</p></div><a href="#/admin/products" class="button button-ghost button-small">${t('viewAll')} ↗</a></div>${products.slice(-4).reverse().map((product) => `<div class="recent-product"><img src="${esc(product.image)}" alt="" /><div class="recent-product-main"><strong>${esc(localName(product))}</strong><span>${esc(product.category)} · ${money(product.discount || product.price)}</span></div><span class="role-pill">${t('live')}</span></div>`).join('')}</section><section class="panel"><div class="panel-head"><div><h2>${t('quickActions')}</h2><p>${t('quickActionsBody')}</p></div></div><div class="quick-actions"><a href="#/admin/products" class="quick-action"><span>${t('addProduct')}</span><b>＋</b></a><a href="#/admin/products" class="quick-action"><span>${t('manageProducts')}</span><b>→</b></a>${isAdmin() ? `<a href="#/admin/staff" class="quick-action"><span>${t('inviteStaff')}</span><b>＋</b></a>` : ''}</div></section></div>`, '/admin');
}

function productsPage() {
  const editing = products.find((product) => product.id === state.editingId);
  const wantsEditor = Boolean(state.editingId) || location.hash.includes('products?new=1') || location.hash.includes('products?edit=1');
  if (wantsEditor) return adminShell(`<div class="admin-topline"><div><div class="eyebrow">${t('products')}</div><h1>${editing ? t('editProduct') : t('newProduct')}</h1><p>${t('productFormBody')}</p></div><a class="button button-soft button-small" href="#/admin/products" data-action="cancel-edit">← ${t('manageProducts')}</a></div>${productForm(editing)}`, '/admin/products');
  const term = state.productSearch.toLowerCase();
  const listed = products.filter((product) => [product.nameEn, product.nameAr, product.category].join(' ').toLowerCase().includes(term));
  return adminShell(`<div class="admin-topline"><div><div class="eyebrow">${t('products')}</div><h1>${t('manageTitle')}</h1><p>${t('manageBody')}</p></div><a class="button button-primary button-small" href="#/admin/products?new=1" data-action="new-product">${t('addProduct')} +</a></div><section class="panel table-panel"><div class="table-toolbar"><h2>${t('products')} <span class="muted">· ${products.length}</span></h2><input class="table-search" id="product-search" type="search" value="${esc(state.productSearch)}" placeholder="${esc(t('productSearch'))}" /></div><div class="table-wrap"><table><thead><tr><th>${t('name')}</th><th>${t('category')}</th><th>${t('price')}</th><th>${t('status')}</th><th>${t('actions')}</th></tr></thead><tbody>${listed.length ? listed.map(productRow).join('') : `<tr><td colspan="5"><div class="empty-state">${t('noResults')}</div></td></tr>`}</tbody></table></div></section>`, '/admin/products');
}

function productRow(product) {
  const canEdit = can('edit');
  const canManage = can('manage');
  return `<tr><td><div class="product-cell"><img src="${esc(product.image)}" alt="" /><div><strong>${esc(localName(product))}</strong><span>${esc(product.nameEn)}</span></div></div></td><td>${esc(product.category)}</td><td><strong>${money(product.discount || product.price)}</strong>${product.discount ? `<br /><small class="muted"><s>${money(product.price)}</s></small>` : ''}</td><td><span class="role-pill">${t('live')}</span></td><td><div class="table-actions">${canEdit ? `<button data-action="edit-product" data-id="${esc(product.id)}" title="${esc(t('edit'))}">↗</button>` : ''}${canManage ? `<button class="danger" data-action="delete-product" data-id="${esc(product.id)}" title="${esc(t('delete'))}">×</button>` : ''}</div></td></tr>`;
}

function productForm(product) {
  const draft = product || { nameEn: '', nameAr: '', descEn: '', descAr: '', price: '', discount: '', category: 'Bags', image: '' };
  const preview = state.imageDraft || draft.image;
  const categories = ['Bags', 'Home', 'Apparel', 'Wellness', 'Stationery', 'Accessories'];
  return `<section class="panel product-editor"><form id="product-form" class="form-grid"><div class="editor-grid"><div class="field"><label>${t('nameEnglish')} *</label><input name="nameEn" value="${esc(draft.nameEn)}" required /></div><div class="field"><label>${t('nameArabic')} *</label><input name="nameAr" class="arabic" dir="rtl" value="${esc(draft.nameAr)}" required /></div><div class="field"><label>${t('descriptionEnglish')}</label><textarea name="descEn">${esc(draft.descEn)}</textarea></div><div class="field"><label>${t('descriptionArabic')}</label><textarea name="descAr" class="arabic" dir="rtl">${esc(draft.descAr)}</textarea></div><div class="field"><label>${t('regularPrice')} *</label><input name="price" type="number" min="0" step="1" value="${esc(draft.price)}" required /></div><div class="field"><label>${t('discountPrice')} <span class="muted">(${t('optional')})</span></label><input name="discount" type="number" min="0" step="1" value="${esc(draft.discount || '')}" /></div><div class="field"><label>${t('category')} *</label><select name="category">${categories.map((category) => `<option ${draft.category === category ? 'selected' : ''} value="${esc(category)}">${esc(category)}</option>`).join('')}</select></div><div class="field"><label>${t('imageUrl')}</label><input name="image" type="url" value="${esc(state.imageDraft || draft.image)}" placeholder="https://..." /></div><div class="field editor-span"><label>${t('uploadImage')}</label><input id="image-file" type="file" accept="image/png,image/jpeg,image/webp" /><div class="file-note">${t('imageHint')}</div></div><div class="editor-image editor-span">${preview ? `<img src="${esc(preview)}" alt="Preview" />` : `<div class="image-placeholder"><strong>＋</strong>${t('uploadImage')}</div>`}</div></div><div class="editor-footer"><button class="button button-primary" type="submit">${t('saveProduct')} ↗</button><a class="button button-ghost" href="#/admin/products" data-action="cancel-edit">${t('cancel')}</a></div></form></section>`;
}

function staffPage() {
  if (!isAdmin()) return adminShell(`<div class="empty-state"><h3>${t('noPermission')}</h3></div>`, '/admin/staff');
  return adminShell(`<div class="admin-topline"><div><div class="eyebrow">${t('staff')}</div><h1>${t('staffTitle')}</h1><p>${t('staffBody')}</p></div></div><div class="staff-layout"><section class="panel"><div class="panel-head"><div><h2>${t('addStaff')}</h2><p>${t('addStaffBody')}</p></div></div><form id="staff-form" class="form-grid"><div class="field"><label>${t('fullName')} *</label><input name="name" required /></div><div class="field"><label>${t('email')} *</label><input name="email" type="email" required /></div><div class="field"><label>${t('password')} *</label><input name="password" type="password" minlength="6" required /></div><div class="field"><label>${t('permissionTitle')}</label><div class="permission-list"><label class="permission-option"><input type="checkbox" name="add" checked />${t('permissionAdd')}</label><label class="permission-option"><input type="checkbox" name="edit" checked />${t('permissionEdit')}</label><label class="permission-option"><input type="checkbox" name="manage" />${t('permissionManage')}</label></div></div><button class="button button-primary" type="submit">${t('createStaff')} ↗</button></form></section><section class="panel table-panel"><div class="table-toolbar"><h2>${t('staff')} <span class="muted">· ${users.length}</span></h2></div><div class="table-wrap"><table><thead><tr><th>${t('fullName')}</th><th>${t('email')}</th><th>${t('role')}</th><th>${t('permissionTitle')}</th></tr></thead><tbody>${users.map((user) => `<tr><td><strong>${esc(user.name)}</strong></td><td>${esc(user.email)}</td><td><span class="role-pill ${user.role === 'admin' ? 'admin' : ''}">${user.role === 'admin' ? t('roleAdmin') : t('roleStaff')}</span></td><td>${user.role === 'admin' ? '—' : [user.permissions.add ? 'Add' : '', user.permissions.edit ? 'Edit' : '', user.permissions.manage ? 'Manage' : ''].filter(Boolean).join(' · ')}</td></tr>`).join('')}</tbody></table></div></section></div>`, '/admin/staff');
}

function render() {
  setDocumentLanguage();
  const current = route();
  let html;
  if (current === '/login') html = loginPage();
  else if (current === '/admin' || current === '/admin/') html = activeUser() ? dashboardPage() : loginPage();
  else if (current === '/admin/products') html = activeUser() ? productsPage() : loginPage();
  else if (current === '/admin/staff') html = activeUser() ? staffPage() : loginPage();
  else html = storefront();
  document.querySelector('#app').innerHTML = html;
  bindEvents();
}

function refreshProductGrid() {
  const target = document.querySelector('#product-grid');
  if (!target) return;
  const term = state.search.trim().toLowerCase();
  const filtered = products.filter((product) => {
    const matchesTerm = !term || [product.nameEn, product.nameAr, product.category].some((value) => String(value).toLowerCase().includes(term));
    return matchesTerm && (state.category === 'all' || product.category === state.category);
  });
  target.innerHTML = filtered.length ? filtered.map(productCard).join('') : `<div class="empty-state"><h3>${t('noResults')}</h3><p class="muted">${t('noResultsBody')}</p></div>`;
  document.querySelectorAll('.category-chip').forEach((chip) => chip.classList.toggle('active', chip.dataset.category === state.category));
}

function showToast(message, kind = '') {
  const root = document.querySelector('#toast-root');
  const node = document.createElement('div');
  node.className = `toast ${kind}`;
  node.textContent = message;
  root.appendChild(node);
  setTimeout(() => node.remove(), 3000);
}

function addToCart(id) {
  const existing = cart.find((line) => line.id === id);
  if (existing) existing.qty += 1; else cart.push({ id, qty: 1 });
  save(STORAGE.cart, cart);
  showToast(t('added'));
  render();
}
function updateCart(id, delta) {
  const line = cart.find((entry) => entry.id === id);
  if (!line) return;
  line.qty += delta;
  if (line.qty <= 0) cart = cart.filter((entry) => entry.id !== id);
  save(STORAGE.cart, cart);
  render();
}
function removeCart(id) {
  cart = cart.filter((entry) => entry.id !== id);
  save(STORAGE.cart, cart);
  render();
}
function persistProduct(form) {
  const values = Object.fromEntries(new FormData(form).entries());
  if (!values.nameEn || !values.nameAr || !values.price) { showToast(t('requiredFields'), 'error'); return; }
  const next = { id: state.editingId || `p${Date.now()}`, nameEn: values.nameEn, nameAr: values.nameAr, descEn: values.descEn, descAr: values.descAr, price: Number(values.price), discount: values.discount ? Number(values.discount) : null, category: values.category, image: values.image || state.imageDraft || image('photo-1523275335684-37898b6baf30'), createdAt: new Date().toISOString().slice(0, 10) };
  if (state.editingId) products = products.map((product) => product.id === state.editingId ? next : product); else products = [...products, next];
  save(STORAGE.products, products);
  state.editingId = null; state.imageDraft = '';
  showToast(t('productSaved'));
  location.hash = '#/admin/products';
  render();
}
function persistStaff(form) {
  const values = Object.fromEntries(new FormData(form).entries());
  if (users.some((user) => user.email.toLowerCase() === values.email.toLowerCase())) { showToast(t('userExists'), 'error'); return; }
  users = [...users, { id: `u${Date.now()}`, name: values.name, email: values.email, password: values.password, role: 'staff', permissions: { add: values.add === 'on', edit: values.edit === 'on', manage: values.manage === 'on' } }];
  save(STORAGE.users, users); showToast(t('staffSaved')); render();
}

function decodeGoogleCredential(token) {
  try {
    const payload = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(decodeURIComponent(atob(payload).split('').map((char) => `%${(`00${char.charCodeAt(0).toString(16)}`).slice(-2)}`).join('')));
  } catch { return null; }
}

function handleGoogleCredential(response) {
  const profile = decodeGoogleCredential(response?.credential || '');
  if (!profile?.email) { showToast(googleSetupMessage(), 'error'); return; }
  let user = users.find((candidate) => candidate.email.toLowerCase() === profile.email.toLowerCase());
  if (!user) {
    user = { id: `google-${profile.sub || Date.now()}`, name: profile.name || profile.email.split('@')[0], email: profile.email, password: '', role: 'staff', provider: 'google', avatar: profile.picture || '', permissions: { add: true, edit: true, manage: false } };
    users = [...users, user]; save(STORAGE.users, users);
  }
  localStorage.setItem(STORAGE.session, JSON.stringify(user));
  showToast(googleSuccessMessage());
  location.hash = '#/admin';
  render();
}

window.handleGoogleCredential = handleGoogleCredential;

function bindEvents() {
  document.querySelectorAll('[data-action]').forEach((element) => element.addEventListener('click', (event) => {
    const action = element.dataset.action;
    if (action === 'google-login') {
      if (!GOOGLE_CLIENT_ID) { showToast(googleSetupMessage(), 'error'); return; }
      if (!window.google?.accounts?.id) { showToast('Google Sign-In is still loading. Please try again.', 'error'); return; }
      window.google.accounts.id.initialize({ client_id: GOOGLE_CLIENT_ID, callback: handleGoogleCredential });
      window.google.accounts.id.prompt();
    }
    if (action === 'toggle-language') { state.lang = state.lang === 'en' ? 'ar' : 'en'; localStorage.setItem(STORAGE.lang, state.lang); render(); }
    if (action === 'open-cart') { state.cartOpen = true; render(); }
    if (action === 'close-cart') { state.cartOpen = false; render(); }
    if (action === 'add-cart') addToCart(element.dataset.id);
    if (action === 'cart-qty') updateCart(element.dataset.id, Number(element.dataset.delta));
    if (action === 'remove-cart') removeCart(element.dataset.id);
    if (action === 'checkout') showToast(t('checkoutSoon'));
    if (action === 'category') { state.category = element.dataset.category; refreshProductGrid(); }
    if (action === 'clear-filters') { state.category = 'all'; state.search = ''; refreshProductGrid(); const input = document.querySelector('#store-search'); if (input) input.value = ''; }
    if (action === 'logout') { localStorage.removeItem(STORAGE.session); showToast(t('loggedOut')); }
    if (action === 'go-admin') { location.hash = '#/admin'; }
    if (action === 'new-product') { state.editingId = null; state.imageDraft = ''; }
    if (action === 'cancel-edit') { state.editingId = null; state.imageDraft = ''; }
    if (action === 'edit-product') { state.editingId = element.dataset.id; location.hash = '#/admin/products?edit=1'; render(); }
    if (action === 'delete-product') { if (confirm(t('deleteConfirm'))) { products = products.filter((product) => product.id !== element.dataset.id); cart = cart.filter((line) => line.id !== element.dataset.id); save(STORAGE.products, products); save(STORAGE.cart, cart); showToast(t('productDeleted')); render(); } }
  }));

  const search = document.querySelector('#store-search');
  if (search) search.addEventListener('input', (event) => { state.search = event.target.value; refreshProductGrid(); });
  const productSearch = document.querySelector('#product-search');
  if (productSearch) productSearch.addEventListener('input', (event) => { state.productSearch = event.target.value; const body = document.querySelector('tbody'); if (body) { const term = state.productSearch.toLowerCase(); body.innerHTML = products.filter((product) => [product.nameEn, product.nameAr, product.category].join(' ').toLowerCase().includes(term)).map(productRow).join(''); bindEvents(); } });
  const login = document.querySelector('#login-form');
  if (login) login.addEventListener('submit', (event) => { event.preventDefault(); const values = Object.fromEntries(new FormData(login).entries()); const user = users.find((candidate) => candidate.email.toLowerCase() === values.email.toLowerCase() && candidate.password === values.password); if (!user) { document.querySelector('#login-error')?.classList.remove('hide'); return; } localStorage.setItem(STORAGE.session, JSON.stringify(user)); location.hash = '#/admin'; render(); });
  const productFormElement = document.querySelector('#product-form');
  if (productFormElement) productFormElement.addEventListener('submit', (event) => { event.preventDefault(); if (!can(state.editingId ? 'edit' : 'add')) { showToast(t('noPermission'), 'error'); return; } persistProduct(productFormElement); });
  const imageInput = document.querySelector('#image-file');
  if (imageInput) imageInput.addEventListener('change', (event) => { const file = event.target.files?.[0]; if (!file) return; const reader = new FileReader(); reader.onload = () => { state.imageDraft = reader.result; render(); }; reader.readAsDataURL(file); });
  const staffFormElement = document.querySelector('#staff-form');
  if (staffFormElement) staffFormElement.addEventListener('submit', (event) => { event.preventDefault(); if (!isAdmin()) { showToast(t('adminOnly'), 'error'); return; } persistStaff(staffFormElement); });
}

window.addEventListener('hashchange', () => { state.cartOpen = false; render(); });
render();
