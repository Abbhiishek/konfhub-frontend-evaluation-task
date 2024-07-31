export const AvailableUnCategorisedTickets = [
    {
        id: 1,
        name: "Free Ticket",
        ispaid: false,
        price: 0,
        currency: "INR",
        description: "This is a ticket description. This is a free ticket. This ticket is uncategorised.",
        venueName: "KonfHub Technologies",
        venueLink: "https://www.google.com/maps/search/?api=1&query=KonfHub+Technologies,+Nagavarapalya,+C+V+Raman+Nagar,+Bengaluru,+Karnataka,+India",
        validtill: "31st Aug 2034, 06:00 PM IST"
    },
    {
        id: 2,
        name: "Paid Ticket",
        ispaid: true,
        price: 1000,
        currency: "INR",
        description: "This is a ticket description. This is a paid ticket. This ticket is uncategorised.",
        venueName: "KonfHub Technologies",
        venueLink: "https://www.google.com/maps/search/?api=1&query=KonfHub+Technologies,+Nagavarapalya,+C+V+Raman+Nagar,+Bengaluru,+Karnataka,+India",
        validtill: "31st Aug 2034, 06:00 PM IST"
    },
    {
        id: 3,
        name: "Donation Ticket",
        ticketType: "donation",
        ispaid: true,
        price: 1000,
        minprice: 10,
        currency: "INR",
        description: "This is a ticket description. This is a donation ticket. This ticket is uncategorised.",
        venueName: "KonfHub Technologies",
        venueLink: "https://www.google.com/maps/search/?api=1&query=KonfHub+Technologies,+Nagavarapalya,+C+V+Raman+Nagar,+Bengaluru,+Karnataka,+India",
        validtill: "31st Aug 2034, 06:00 PM IST"
    },
    {
        id: 4,
        name: "Ticket With Coupon",
        ticketType: "coupon",
        ispaid: true,
        price: 1000,
        minprice: null,
        currency: "INR",
        description: "This is a ticket description. This is a paid ticket. This ticket is uncategorised. This ticket also has a coupon. Buy minimum - 1 and maximum - 1000000 and avail 10% off",
        venueName: "KonfHub Technologies",
        venueLink: "https://www.google.com/maps/search/?api=1&query=KonfHub+Technologies,+Nagavarapalya,+C+V+Raman+Nagar,+Bengaluru,+Karnataka,+India",
        validtill: "31st Aug 2034, 06:00 PM IST"
    },
]


export const AvailableCategoryTickets = [
    {
        id: 1,
        categoryName: "Workshop Category",
        description: "This is category description. This category is collapsed by default.",
        tickets: [
            {
                id: 1,
                name: "Free Ticket in Workshop Category",
                ispaid: false,
                price: null,
                currency: "INR",
                description: "This is a ticket description. This is a free ticket. This ticket is categorized.",
                venueName: "KonfHub Technologies",
                venueLink: "https://www.google.com/maps/search/?api=1&query=KonfHub+Technologies,+Nagavarapalya,+C+V+Raman+Nagar,+Bengaluru,+Karnataka,+India",
                validtill: "31st Aug 2034, 06:00 PM IST"
            },
            {
                id: 2,
                name: "Paid Ticket in Workshop Category",
                ispaid: true,
                price: 1000,
                currency: "INR",
                description: "This is a ticket description. This is a paid ticket. This ticket is categorised.",
                venueName: "KonfHub Technologies",
                venueLink: "https://www.google.com/maps/search/?api=1&query=KonfHub+Technologies,+Nagavarapalya,+C+V+Raman+Nagar,+Bengaluru,+Karnataka,+India",
                validtill: "31st Aug 2034, 06:00 PM IST"
            }
        ]
    },
    {
        id: 2,
        categoryName: "Conference Category (Expanded by Default)",
        description: "This is category description. This category is expanded by default. This is a little longer description. Adding more content to make the description look longer. Adding more content to make the description look longer. Adding more content to make the description look longer. Adding more content to make the description look longer. Adding more content to make the description look longer. Adding more content to make the description look longer.",
        tickets: [
            {
                id: 1,
                name: "Free Ticket in Conference Category",
                ispaid: false,
                price: null,
                currency: "INR",
                description: "This is a ticket description. This is a free ticket. This ticket is categorized.",
                venueName: "KonfHub Technologies",
                venueLink: "https://www.google.com/maps/search/?api=1&query=KonfHub+Technologies,+Nagavarapalya,+C+V+Raman+Nagar,+Bengaluru,+Karnataka,+India",
                validtill: "31st Aug 2034, 06:00 PM IST"
            },
            {
                id: 2,
                name: "Paid Ticket in Conference Category",
                ispaid: true,
                price: 1000,
                currency: "INR",
                description: "This is a ticket description. This is a paid ticket. This ticket is categorized.",
                venueName: "KonfHub Technologies",
                venueLink: "https://www.google.com/maps/search/?api=1&query=KonfHub+Technologies,+Nagavarapalya,+C+V+Raman+Nagar,+Bengaluru,+Karnataka,+India",
                validtill: "31st Aug 2034, 06:00 PM IST"
            }
        ]
    }
]