export default function MainContent() {
  const cards = [
    { title: "WAN 2.2", desc: "Image generation...", img: "/placeholder1.jpg" },
    { title: "WAN 2.2", desc: "Download our new model...", img: "/placeholder2.jpg" },
    { title: "Open Sour", desc: "Download and use our model...", img: "/placeholder3.jpg" },
  ];

  return (
    <main className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {cards.map((card, index) => (
        <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
          <img src={card.img} alt={card.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold">{card.title}</h3>
            <p className="text-gray-600">{card.desc}</p>
          </div>
        </div>
      ))}
    </main>
  );
}
