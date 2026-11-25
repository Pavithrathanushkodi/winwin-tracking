/**
 * WIN WIN WIRELESS — SEPARATE CUSTOMER TRACKING DATA FILE (customers.js)
 * =============================================================================
 * Linked directly in index.html (<script src="/customers.js"></script>).
 *
 * HOW TO ADD & UPDATE EACH CUSTOMER ONE BY ONE:
 * 1. Edit a customer entry below or copy one to add another customer inside
 *    `window.CUSTOMERS = [ ... ];`.
 * 2. Update `trackingId`, `customerName`, `productName`, `orderDate`,
 *    `deliveryAddress`, `estimatedDelivery`, and `updates`.
 * 3. Add each progress update one by one inside `updates: [ ... ]` with its `date`.
 *    The latest dated step automatically becomes Current Status & Where It Is Now.
 * 4. Save this file and search the Tracking ID on the website to see updates.
 */

window.CUSTOMERS = [
  {
    trackingId: '64467130195',
    customerName: 'Vignesh Senthilkumar',
    productName:
      'Duo (2), 17 Pro (1), 8 Pro (2), 18 Pro Max (2), 15 Pro Max (1), 17 Pro Max (2)',
    orderDate: '2026-11-15',
    originCity: 'One Deira Mall, Dubai, UAE',
    destinationCity: 'Coimbatore, India',
    deliveryAddress: 'Coimbatore, Tamil Nadu, India',
    estimatedDelivery: '2026-12-04',
    updates: [
      {
        date: '2026-11-15',
        time: '10:00',
        location: 'One Deira Mall, Dubai, UAE',
        status: 'Order Confirmed',
        notes: 'Order confirmed at One Deira Mall, Dubai.',
      },
      {
        date: '2026-11-16',
        time: '13:30',
        location: 'One Deira Mall, Dubai, UAE',
        status: 'Packed',
        notes: 'All units verified, packed, and sealed for shipment.',
      },
      {
        date: '2026-11-18',
        time: '18:15',
        location: 'Dubai, UAE',
        status: 'Shipping Started',
        notes: 'Shipping started from Dubai to India.',
      },
      {
        date: '2026-11-21',
        time: '11:40',
        location: 'Mumbai (Bombay), Maharashtra, India',
        status: 'Reached Bombay',
        notes: 'Shipment arrived in Bombay and cleared for onward transit to Coimbatore.',
      },
      {
        date: '2026-11-24',
        time: '09:30',
        location: 'In Transit — Bombay to Coimbatore',
        status: 'In Transit to Coimbatore',
        notes: 'Currently travelling from Bombay to Coimbatore.',
      },
    ],
  },

];
