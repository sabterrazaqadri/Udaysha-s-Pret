import { client } from '../../lib/client';

// Fetch about page from Sanity
async function getAboutPage() {
  const query = `*[_type == "page" && slug.current == "about"][0]{
    _id,
    title,
    content,
    seo
  }`;

  const page = await client.fetch(query);
  return page;
}

export default async function AboutPage() {
  const page = await getAboutPage();

  // Default content if no data found in Sanity
  const defaultContent = {
    title: "About Udaysha's Pret",
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: "Udaysha's Pret is a contemporary fashion brand dedicated to bringing you the finest quality clothing with a distinctive style. Founded with the vision of creating timeless pieces that celebrate individuality and elegance, we strive to offer unique designs that resonate with the modern consumer."
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Our journey began with a simple idea: to create clothing that makes people feel confident and stylish. We believe in the power of fashion to express personality and enhance confidence, which is why we pay meticulous attention to every detail in our designs.'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'At Udaysha\'s Pret, we are committed to sustainability and ethical practices. We source our materials responsibly and work with artisans who share our values of quality craftsmanship and environmental consciousness.'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Our collections blend traditional techniques with contemporary aesthetics, resulting in pieces that are both familiar and refreshingly new. We aim to create a wardrobe that reflects the diverse tastes and lifestyles of our customers.'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Thank you for choosing Udaysha\'s Pret. We hope you enjoy our collection as much as we enjoyed creating it for you.'
          }
        ]
      }
    ]
  };

  const displayPage = page || defaultContent;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">{displayPage.title}</h1>
      <div className="prose max-w-none mx-auto">
        {displayPage.content && displayPage.content.map((block: any, index: number) => (
          <p key={index} className="mb-4 text-gray-700 leading-relaxed">
            {block.children?.[0]?.text || ''}
          </p>
        ))}
      </div>
    </div>
  );
}