import Image from 'next/image';

const team = [
  {
    name: 'Marvin McKinney',
    role: 'Founder & CEO',
    imageUrl: '/team/marvin.jpg',
  },
  {
    name: 'Darlene Robertson',
    role: 'Production Manager',
    imageUrl: '/team/darlene.jpg',
  },
  {
    name: 'Leslie Alexander',
    role: 'Marketing Director',
    imageUrl: '/team/leslie.jpg',
  },
  {
    name: 'Ronald Richards',
    role: 'Sales Manager',
    imageUrl: '/team/ronald.jpg',
  },
];

export default function OurTeam() {
  return (
    <section className="px-6 md:px-20 py-24 bg-white">
      <p className="text-sm uppercase tracking-widest text-gray-500">⌘ Experts</p>
      <h2 className="text-5xl font-semibold mt-2 mb-12">Meet Our Team</h2>
      
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
        {team.map((member, idx) => (
          <div key={idx} className="text-center">
            <div className="relative w-full h-[300px] bg-gray-100 rounded overflow-hidden">
              <Image
                src={member.imageUrl}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-medium">{member.name}</h3>
            <p className="text-gray-500 text-sm">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
