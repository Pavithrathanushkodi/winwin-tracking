/**
 * WIN WIN WIRELESS — SEPARATE CUSTOMER TRACKING DATA FILE (customers.js)
 * =============================================================================
 * Linked directly in index.html (<script src="/customers.js"></script>).
 *
 * COMPLETE 9-STEP SHIPMENT STATUSES:
 *   01. Order Placed
 *   02. Payment Confirmed
 *   03. Order Processing
 *   04. Packed
 *   05. Shipment Booked
 *   06. Picked Up
 *   07. In Transit
 *   08. Out for Delivery
 *   09. Delivered
 *
 * HOW TO UPDATE:
 * - Add or edit `date` & `time` on each step inside `updates: [ ... ]`.
 * - Steps with a `date` show as completed/active; the latest dated step
 *   automatically becomes Current Status & Where It Is Now.
 * - Steps with `date: ''` stay visible below as upcoming steps until updated.
 */

window.CUSTOMERS = [
  {
    trackingId: '64467130195',
    customerName: 'Vijay',
    productName:
      'Duo (2), 17 Pro (1), 8 Pro (2), 18 Pro Max (2), 15 Pro Max (1), 17 Pro Max (2)',
    orderDate: '2026-11-15',
    originCity: 'One Deira Mall, Dubai, UAE',
    destinationCity: 'Coimbatore, India',
    deliveryAddress: 'Coimbatore, Tamil Nadu, India',
    estimatedDelivery: '2026-11-27',
    updates: [
      {
        date: '2026-11-15',
        time: '10:00',
        location: 'One Deira Mall, Dubai, UAE',
        status: 'Order Placed',
        notes: 'Customer purchases a product through the website.',
      },
      {
        date: '2026-11-15',
        time: '11:30',
        location: 'One Deira Mall, Dubai, UAE',
        status: 'Payment Confirmed',
        notes: 'Payment is verified (UPI, card, cash on delivery, etc.).',
      },
      {
        date: '2026-11-16',
        time: '09:45',
        location: 'One Deira Mall, Dubai, UAE',
        status: 'Order Processing',
        notes: 'Admin verifies the order, product, quantity and customer details.',
      },
      {
        date: '2026-11-16',
        time: '15:20',
        location: 'One Deira Mall, Dubai, UAE',
        status: 'Packed',
        notes: 'Product is checked, packed and prepared for shipping.',
      },
      {
        date: '2026-11-17',
        time: '12:00',
        location: 'Dubai, UAE',
        status: 'Shipment Booked',
        notes: 'Courier company is selected and shipment is booked.',
      },
      {
        date: '2026-11-18',
        time: '17:45',
        location: 'Dubai, UAE',
        status: 'Picked Up',
        notes: 'Courier collects the parcel.',
      },
      {
        date: '2026-11-22',
        time: '09:30',
        location: 'Bombay to Coimbatore, India',
        status: 'In Transit',
        notes: 'Parcel moves between courier hubs and destinations (Bombay to Coimbatore).',
      },
      {
        date: '2026-11-25',
        time: '09:00',
        location: 'Coimbatore, Tamil Nadu, India',
        status: 'Out for Delivery',
        notes: 'Parcel is with the local delivery agent.',
      },
      {
        date: '',
        time: '',
        location: 'Coimbatore, Tamil Nadu, India',
        status: 'Delivered',
        notes: 'Customer receives the product and delivery is confirmed.',
      },
    ],
  },

  {
    trackingId: '123459876',
    customerName: 'Rajesh',
    productName: 'iPhone 14 Pro Max 256GB — Desert Titanium',
    orderDate: '2026-11-17',
    originCity: 'One Deira Mall, Dubai, UAE',
    destinationCity: 'India',
    deliveryAddress: 'Mumbai, Maharashtra, India',
    estimatedDelivery: '2026-12-08',
    updates: [
      {
        date: '2026-11-17',
        time: '10:00',
        location: 'One Deira Mall, Dubai, UAE',
        status: 'Order Placed',
        notes: 'Customer purchases a product through the website.',
      },
      {
        date: '',
        time: '',
        location: 'One Deira Mall, Dubai, UAE',
        status: 'Payment Confirmed',
        notes: 'Payment is verified (UPI, card, cash on delivery, etc.).',
      },
      {
        date: '',
        time: '',
        location: 'One Deira Mall, Dubai, UAE',
        status: 'Order Processing',
        notes: 'Admin verifies the order, product, quantity and customer details.',
      },
      {
        date: '',
        time: '',
        location: 'One Deira Mall, Dubai, UAE',
        status: 'Packed',
        notes: 'Product is checked, packed and prepared for shipping.',
      },
      {
        date: '',
        time: '',
        location: 'Dubai, UAE',
        status: 'Shipment Booked',
        notes: 'Courier company is selected and shipment is booked.',
      },
      {
        date: '',
        time: '',
        location: 'Dubai, UAE',
        status: 'Picked Up',
        notes: 'Courier collects the parcel.',
      },
      {
        date: '',
        time: '',
        location: 'Dubai to India',
        status: 'In Transit',
        notes: 'Parcel moves between courier hubs and destinations.',
      },
      {
        date: '',
        time: '',
        location: 'Mumbai, Maharashtra, India',
        status: 'Out for Delivery',
        notes: 'Parcel is with the local delivery agent.',
      },
      {
        date: '',
        time: '',
        location: 'Mumbai, Maharashtra, India',
        status: 'Delivered',
        notes: 'Customer receives the product and delivery is confirmed.',
      },
    ],
  },

  {
    trackingId: '987654321',
    customerName: 'Win Win Customer',
    productName: 'iPhone 13 Pro Max 256GB — Desert Titanium, 2 phones',
    orderDate: '2026-11-15',
    originCity: 'One Deira Mall, Dubai, UAE',
    destinationCity: 'India',
    deliveryAddress: 'Mumbai, Maharashtra, India',
    estimatedDelivery: '2026-12-08',
    updates: [
      {
        date: '2026-11-15',
        time: '10:00',
        location: 'One Deira Mall, Dubai, UAE',
        status: 'Order Placed',
        notes: 'Customer purchases a product through the website.',
      },
      {
        date: '2026-11-15',
        time: '11:00',
        location: 'One Deira Mall, Dubai, UAE',
        status: 'Payment Confirmed',
        notes: 'Payment is verified (UPI, card, cash on delivery, etc.).',
      },
      {
        date: '2026-11-15',
        time: '14:00',
        location: 'One Deira Mall, Dubai, UAE',
        status: 'Order Processing',
        notes: 'Admin verifies the order, product, quantity and customer details.',
      },
      {
        date: '2026-11-16',
        time: '12:30',
        location: 'One Deira Mall, Dubai, UAE',
        status: 'Packed',
        notes: 'Product is checked, packed and prepared for shipping.',
      },
      {
        date: '2026-11-17',
        time: '15:00',
        location: 'Dubai, UAE',
        status: 'Shipment Booked',
        notes: 'Courier company is selected and shipment is booked.',
      },
      {
        date: '',
        time: '',
        location: 'Dubai, UAE',
        status: 'Picked Up',
        notes: 'Courier collects the parcel.',
      },
      {
        date: '',
        time: '',
        location: 'Dubai to India',
        status: 'In Transit',
        notes: 'Parcel moves between courier hubs and destinations.',
      },
      {
        date: '',
        time: '',
        location: 'Mumbai, Maharashtra, India',
        status: 'Out for Delivery',
        notes: 'Parcel is with the local delivery agent.',
      },
      {
        date: '',
        time: '',
        location: 'Mumbai, Maharashtra, India',
        status: 'Delivered',
        notes: 'Customer receives the product and delivery is confirmed.',
      },
    ],
  },
];
