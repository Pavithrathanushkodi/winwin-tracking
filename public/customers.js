/**
 * WIN WIN WIRELESS — SEPARATE CUSTOMER TRACKING DATA FILE (customers.js)
 * =============================================================================
 * Linked directly in index.html (<script src="/customers.js"></script>).
 *
 * HOW TO ADD & UPDATE EACH CUSTOMER ONE BY ONE:
 * 1. Edit the customer entry below or copy it to add another customer inside
 *    `window.CUSTOMERS = [ ... ];`.
 * 2. Update `trackingId`, `customerName`, `phoneNumber`, `productName`, `orderDate`,
 *    `deliveryAddress`, `currentLocation`, `status`, and `estimatedDelivery`.
 * 3. Add each progress update one by one inside `updates: [ ... ]` and set
 *    `status` and `currentLocation` to the latest step.
 * 4. Save this file and search the Tracking ID on the website to see updates.
 *
 * VALID `status` VALUES:
 *   - 'Pending'
 *   - 'Product Packed'
 *   - 'Dispatch'
 *   - 'Shipped'
 *   - 'Customs Clearance'
 *   - 'Reach India'
 */

window.CUSTOMERS = [
  {
    trackingId: 'WWW-DXB-10001',
    customerName: 'Win Win Customer',
    phoneNumber: '+91 98765 43210',
    productName: 'iPhone 16 Pro Max 256GB — Desert Titanium',
    orderDate: '2026-11-17',
    originCity: 'One Deira Mall, Dubai, UAE',
    destinationCity: 'India',
    deliveryAddress: 'Mumbai, Maharashtra, India',
    currentLocation: 'One Deira Mall, Dubai, UAE',
    status: 'Product Packed',
    estimatedDelivery: '2026-12-08',
    updates: [
      {
        date: '2026-11-17',
        time: '10:00',
        location: 'One Deira Mall, Dubai, UAE',
        status: 'Pending',
        notes: 'Order confirmed and queued for packing.',
      },
      {
        date: '2026-11-18',
        time: '12:30',
        location: 'One Deira Mall, Dubai, UAE',
        status: 'Product Packed',
        notes: 'Device verified, packed, and sealed at One Deira Mall, Dubai.',
      },
    ],
  },

   {
    trackingId: 'WWW-DXB-10002',
    customerName: 'Win Win Customer',
    phoneNumber: '+91 98765 40210',
    productName: 'iPhone 14 Pro Max 256GB — Desert Titanium',
    orderDate: '2026-11-17',
    originCity: 'One Deira Mall, Dubai, UAE',
    destinationCity: 'India',
    deliveryAddress: 'Mumbai, Maharashtra, India',
    currentLocation: 'One Deira Mall, Dubai, UAE',
    status: 'Product Packed',
    estimatedDelivery: '2026-12-08',
    updates: [
      {
        date: '2026-11-17',
        time: '10:00',
        location: 'One Deira Mall, Dubai, UAE',
        status: 'Pending',
        notes: 'Order confirmed and queued for packing.',
      },
      {
        date: '2026-11-18',
        time: '12:30',
        location: 'One Deira Mall, Dubai, UAE',
        status: 'Product Packed',
        notes: 'Device verified, packed, and sealed at One Deira Mall, Dubai.',
      },
    ],
  },
];
