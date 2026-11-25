function getCustomersList() {
  const list = /** @type {any} */ (window).CUSTOMERS;
  return Array.isArray(list) ? list : [];
}

const STATUS_META = {
  Pending: {
    className: 'status-pending',
    icon: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  },
  Packed: {
    className: 'status-packed',
    icon: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"/><path d="m7.5 4.27 9 5.15"/></svg>`,
  },
  'Product Packed': {
    className: 'status-packed',
    icon: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"/><path d="m7.5 4.27 9 5.15"/></svg>`,
  },
  Product: {
    className: 'status-packed',
    icon: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"/><path d="m7.5 4.27 9 5.15"/></svg>`,
  },
  Dispatch: {
    className: 'status-dispatch',
    icon: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>`,
  },
  Shipped: {
    className: 'status-shipped',
    icon: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>`,
  },
  'Customs Clearance': {
    className: 'status-customs',
    icon: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,
  },
  'Custom Clearance': {
    className: 'status-customs',
    icon: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,
  },
  'Out for Delivery': {
    className: 'status-out',
    icon: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>`,
  },
  'Order Confirmed': {
    className: 'status-dispatch',
    icon: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`,
  },
  'Shipping Started': {
    className: 'status-shipped',
    icon: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>`,
  },
  'Reach India': {
    className: 'status-reach-india',
    icon: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`,
  },
  'Delivered to India': {
    className: 'status-delivered',
    icon: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`,
  },
};

function getStatusMeta(status) {
  const raw = String(status || '').trim();
  if (STATUS_META[raw]) {
    return { label: raw, ...STATUS_META[raw] };
  }
  const lower = raw.toLowerCase();
  const matchedKey = Object.keys(STATUS_META).find((k) => k.toLowerCase() === lower);
  if (matchedKey) {
    return { label: raw, ...STATUS_META[matchedKey] };
  }
  if (lower.startsWith('reach') || lower.startsWith('delivered')) {
    return { label: raw, ...STATUS_META['Reach India'] };
  }
  if (lower.includes('transit') || lower.includes('travel')) {
    return { label: raw, ...STATUS_META['Out for Delivery'] };
  }
  if (lower.includes('ship')) {
    return { label: raw, ...STATUS_META.Shipped };
  }
  if (lower.includes('confirm')) {
    return { label: raw, ...STATUS_META['Order Confirmed'] };
  }
  return { label: raw || 'Pending', ...STATUS_META.Pending };
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function normalizeTrackingId(value) {
  return String(value || '')
    .trim()
    .toUpperCase()
    .replace(/\s+/g, '');
}

function formatDisplayDate(dateStr) {
  if (!dateStr) return '—';
  const isoMatch = /^\d{4}-\d{2}-\d{2}$/.test(String(dateStr).trim());
  if (!isoMatch) return String(dateStr);
  const parsed = new Date(`${dateStr.trim()}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return String(dateStr);
  return parsed.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function renderStatusHtml(status) {
  const meta = getStatusMeta(status);
  return `
    <span class="status-inline ${meta.className}">
      ${meta.icon}
      <span>${escapeHtml(meta.label)}</span>
    </span>
  `;
}

function getField(obj, ...keys) {
  for (const key of keys) {
    if (obj && obj[key] !== undefined && obj[key] !== null && String(obj[key]).trim() !== '') {
      return obj[key];
    }
  }
  return '';
}

function findCustomerShipment(rawQuery) {
  const normalized = normalizeTrackingId(rawQuery);
  if (!normalized) return null;
  const customers = getCustomersList();
  return (
    customers.find(
      (item) => normalizeTrackingId(getField(item, 'trackingId', 'trackId', 'id')) === normalized
    ) || null
  );
}

function hasStepDate(upd) {
  return Boolean(upd && upd.date !== undefined && upd.date !== null && String(upd.date).trim() !== '');
}

function renderShipmentResult(shipment) {
  const trackingId = getField(shipment, 'trackingId', 'trackId', 'id');
  const customerName = getField(shipment, 'customerName', 'name');
  const phoneNumber = getField(shipment, 'phoneNumber', 'phone');
  const productName = getField(shipment, 'productName', 'model', 'product');
  const orderDate = getField(shipment, 'orderDate', 'date');
  const deliveryAddress = getField(shipment, 'deliveryAddress', 'address');
  const estimatedDelivery = getField(shipment, 'estimatedDelivery', 'deliveryDate');

  const rawUpdates = Array.isArray(shipment.updates) ? shipment.updates : [];
  const datedUpdates = rawUpdates
    .map((u, i) => ({ u, i }))
    .filter((entry) => hasStepDate(entry.u))
    .sort((a, b) => {
      const dtA = `${String(a.u.date).trim()}T${a.u.time || '00:00'}`;
      const dtB = `${String(b.u.date).trim()}T${b.u.time || '00:00'}`;
      const cmp = dtA.localeCompare(dtB);
      return cmp !== 0 ? cmp : a.i - b.i;
    })
    .map((entry) => entry.u);

  const undatedUpdates = rawUpdates.filter((u) => !hasStepDate(u));
  const updates = [...datedUpdates, ...undatedUpdates];

  const currentIndex = datedUpdates.length > 0 ? datedUpdates.length - 1 : -1;
  const latestDatedUpdate = currentIndex >= 0 ? datedUpdates[currentIndex] : null;

  const effectiveStatus = latestDatedUpdate
    ? latestDatedUpdate.status
    : getField(shipment, 'status') || 'Pending';
  const effectiveLocation = latestDatedUpdate
    ? latestDatedUpdate.location
    : getField(shipment, 'currentLocation', 'location') || 'One Deira Mall, Dubai, UAE';

  if (updates.length === 0) {
    updates.push({
      date: orderDate,
      time: '',
      location: effectiveLocation,
      status: effectiveStatus,
      notes: '',
    });
  }

  const completedCount = datedUpdates.length > 0 ? datedUpdates.length : 1;
  const totalCount = updates.length;
  const updateLabel =
    undatedUpdates.length > 0
      ? `${completedCount} of ${totalCount} steps`
      : `${totalCount} ${totalCount === 1 ? 'update' : 'updates'}`;
  const origin = getField(shipment, 'originCity', 'origin') || 'One Deira Mall, Dubai, UAE';
  const destination = getField(shipment, 'destinationCity', 'destination') || 'India';

  const timelineItemsHtml = updates
    .map((upd, idx) => {
      const isDated = hasStepDate(upd) || datedUpdates.length === 0;
      const isCurrent = datedUpdates.length > 0 ? idx === currentIndex : idx === 0;
      const isFirst = idx === 0 && isDated;
      const isLast = idx === updates.length - 1;

      const markerClass = !isDated
        ? 'timeline-marker timeline-marker-upcoming'
        : isCurrent
          ? 'timeline-marker timeline-marker-current'
          : isFirst
            ? 'timeline-marker timeline-marker-first'
            : 'timeline-marker';

      const markerInner = isCurrent
        ? `<svg class="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>`
        : `<span class="timeline-dot"></span>`;

      const connectorClass =
        !isDated || isCurrent ? 'timeline-connector timeline-connector-upcoming' : 'timeline-connector';

      const boxClass = !isDated
        ? 'timeline-box timeline-box-upcoming'
        : isCurrent
          ? 'timeline-box timeline-box-current'
          : 'timeline-box';

      const timePart = upd.time ? ` · ${escapeHtml(upd.time)}` : '';
      const dateDisplayHtml = isDated
        ? `<span>${escapeHtml(formatDisplayDate(upd.date))}${timePart}</span>`
        : `<span class="timeline-upcoming-label">Awaiting date</span>`;

      const notesHtml = upd.notes
        ? `<p class="timeline-notes">${escapeHtml(upd.notes)}</p>`
        : '';

      return `
        <li class="timeline-item" style="animation-delay: ${idx * 80}ms;">
          ${!isLast ? `<span class="${connectorClass}" aria-hidden="true"></span>` : ''}
          <span class="${markerClass}" aria-hidden="true">${markerInner}</span>
          <div class="${boxClass}">
            <div class="timeline-box-top">
              <div class="timeline-box-left">
                ${renderStatusHtml(upd.status)}
                <span class="timeline-sep" aria-hidden="true">·</span>
                <span class="timeline-location">${escapeHtml(upd.location)}</span>
              </div>
              <div class="timeline-timestamp tabular-nums">
                <svg class="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                ${dateDisplayHtml}
              </div>
            </div>
            ${notesHtml}
          </div>
        </li>
      `;
    })
    .join('');

  const phoneHtml = phoneNumber
    ? `<p class="detail-phone tabular-nums">${escapeHtml(phoneNumber)}</p>`
    : '';
  const addressHtml = deliveryAddress
    ? `<p class="detail-subtext">${escapeHtml(deliveryAddress)}</p>`
    : '';

  return `
    <div class="result-stack">
      <div class="dossier-card">
        <div class="dossier-header">
          <div>
            <div class="dossier-id-row">
              <span class="dossier-tracking-id tabular-nums">${escapeHtml(trackingId)}</span>
              <button type="button" id="copyTrackingIdBtn" class="copy-id-btn" data-tracking-id="${escapeHtml(trackingId)}">
                <svg class="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
                <span>Copy ID</span>
              </button>
            </div>
            <p class="dossier-route">${escapeHtml(origin)} → ${escapeHtml(destination)}</p>
          </div>

          <div class="dossier-status-group">
            <div>
              <p class="dossier-meta-caption">Current Status</p>
              ${renderStatusHtml(effectiveStatus)}
            </div>
            <div class="dossier-est-block">
              <p class="dossier-meta-caption">Estimated Delivery (Within 15 Working Days)</p>
              <p class="dossier-est-date tabular-nums">${escapeHtml(formatDisplayDate(estimatedDelivery))}</p>
            </div>
          </div>
        </div>

        <div class="dossier-grid">
          <div>
            <p class="detail-label">
              <svg class="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                <path d="M12 18h.01" />
              </svg>
              <span>Ordered Model</span>
            </p>
            <p class="detail-value">${escapeHtml(productName)}</p>
          </div>

          <div>
            <p class="detail-label">
              <svg class="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
              </svg>
              <span>Order Date</span>
            </p>
            <p class="detail-value tabular-nums">${escapeHtml(formatDisplayDate(orderDate))}</p>
          </div>

          <div>
            <p class="detail-label">
              <svg class="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Where It Is Now</span>
            </p>
            <p class="detail-value detail-value-gold">${escapeHtml(effectiveLocation)}</p>
          </div>

          <div>
            <p class="detail-label">
              <svg class="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>Customer &amp; Contact</span>
            </p>
            <p class="detail-value">${escapeHtml(customerName)}</p>
            ${phoneHtml}
            ${addressHtml}
          </div>
        </div>
      </div>

      <div class="timeline-card">
        <div class="timeline-header">
          <h2 class="timeline-title">Transit Progress</h2>
          <span class="timeline-count tabular-nums">${updateLabel}</span>
        </div>
        <ol class="timeline-list">
          ${timelineItemsHtml}
        </ol>
      </div>
    </div>
  `;
}

function renderNotFoundResult(searchedId) {
  return `
    <div class="not-found-card">
      <div class="not-found-icon-box">
        <svg class="icon-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
          <path d="M12 22V12" />
          <path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7" />
        </svg>
      </div>
      <h2 class="not-found-title">
        No shipment found for <span class="not-found-id">${escapeHtml(searchedId)}</span>
      </h2>
      <p class="not-found-desc">
        Please check your Tracking ID or message us on WhatsApp for shipping enquiries.
      </p>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  const trackingForm = document.getElementById('trackingForm');
  const trackingInput = document.getElementById('trackingInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const resultSection = document.getElementById('resultSection');
  const brandHomeLink = document.getElementById('brandHomeLink');

  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  const menuIconOpen = document.getElementById('menuIconOpen');
  const menuIconClose = document.getElementById('menuIconClose');

  const tabWholesale = document.getElementById('tabWholesale');
  const tabRetail = document.getElementById('tabRetail');
  const panelWholesale = document.getElementById('panelWholesale');
  const panelRetail = document.getElementById('panelRetail');

  function syncClearButton() {
    if (!clearSearchBtn || !(trackingInput instanceof HTMLInputElement)) return;
    if (trackingInput.value.length > 0) {
      clearSearchBtn.classList.remove('hidden');
    } else {
      clearSearchBtn.classList.add('hidden');
    }
  }

  function performSearch(rawQuery) {
    if (!resultSection) return;
    const trimmed = String(rawQuery || '').trim().toUpperCase();
    if (!trimmed) {
      resultSection.innerHTML = '';
      resultSection.classList.add('hidden');
      return;
    }

    const shipment = findCustomerShipment(trimmed);
    resultSection.innerHTML = shipment
      ? renderShipmentResult(shipment)
      : renderNotFoundResult(trimmed);
    resultSection.classList.remove('hidden');

    const copyBtn = document.getElementById('copyTrackingIdBtn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const id = copyBtn.getAttribute('data-tracking-id') || '';
        navigator.clipboard?.writeText(id).catch(() => {});
        copyBtn.innerHTML = `
          <svg class="icon-xs icon-emerald" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" />
          </svg>
          <span>Copied</span>
        `;
        setTimeout(() => {
          copyBtn.innerHTML = `
            <svg class="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
            <span>Copy ID</span>
          `;
        }, 1800);
      });
    }
  }

  function clearSearch() {
    if (trackingInput instanceof HTMLInputElement) {
      trackingInput.value = '';
    }
    syncClearButton();
    performSearch('');
  }

  if (trackingInput instanceof HTMLInputElement) {
    trackingInput.addEventListener('input', syncClearButton);
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', clearSearch);
  }

  if (trackingForm) {
    trackingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (trackingInput instanceof HTMLInputElement) {
        performSearch(trackingInput.value);
      }
    });
  }

  if (brandHomeLink) {
    brandHomeLink.addEventListener('click', (e) => {
      e.preventDefault();
      clearSearch();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function setMobileMenu(open) {
    if (!mobileNav || !mobileMenuBtn || !menuIconOpen || !menuIconClose) return;
    mobileNav.classList.toggle('hidden', !open);
    menuIconOpen.classList.toggle('hidden', open);
    menuIconClose.classList.toggle('hidden', !open);
    mobileMenuBtn.setAttribute('aria-expanded', String(open));
    mobileMenuBtn.setAttribute(
      'aria-label',
      open ? 'Close navigation menu' : 'Open navigation menu'
    );
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileNav && !mobileNav.classList.contains('hidden');
      setMobileMenu(!isOpen);
    });
  }

  document.querySelectorAll('.mobile-nav-link').forEach((link) => {
    link.addEventListener('click', () => setMobileMenu(false));
  });

  function setChannel(channel) {
    if (!tabWholesale || !tabRetail || !panelWholesale || !panelRetail) return;
    const isWholesale = channel === 'wholesale';

    tabWholesale.setAttribute('aria-selected', String(isWholesale));
    tabRetail.setAttribute('aria-selected', String(!isWholesale));

    tabWholesale.className = isWholesale
      ? 'channel-tab channel-tab-active-dark'
      : 'channel-tab';
    tabRetail.className = !isWholesale
      ? 'channel-tab channel-tab-active-gold'
      : 'channel-tab';

    panelWholesale.classList.toggle('hidden', !isWholesale);
    panelRetail.classList.toggle('hidden', isWholesale);
  }

  if (tabWholesale) {
    tabWholesale.addEventListener('click', () => setChannel('wholesale'));
  }

  if (tabRetail) {
    tabRetail.addEventListener('click', () => setChannel('retail'));
  }

  const params = new URLSearchParams(window.location.search);
  const urlTrackingId = params.get('id');
  if (urlTrackingId && trackingInput instanceof HTMLInputElement) {
    trackingInput.value = urlTrackingId.toUpperCase();
    syncClearButton();
    performSearch(urlTrackingId);
  }
});
