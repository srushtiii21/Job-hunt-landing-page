import React from 'react';

const people = [
  {
    name: 'Arlene McCoy',
    role: 'Graphic Designer',
  },
  {
    name: 'Esther Howard',
    role: 'UI/UX Designer',
    skills: ['UI Design', 'Mobile App', 'Web Design'],
  },
  {
    name: 'Marvin McKinney',
    role: 'Software Developer',
    skills: ['JavaScript', 'C++', 'Python'],
  },
];

function Marketing() {
  return (
    <>
      <div className="flex flex-col items-center p-8 bg-gray-100 rounded-xl">
        <div className="w-full max-w-xl">
          <h1 className="text-4xl font-bold mb-4 text-center">Why We Are Most Popular</h1>
          <div className="collapse collapse-arrow bg-base-200 mb-2">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              Quality & Verified Freelancers
            </div>
            <div className="collapse-content">
              <p>
                All freelancers have been curated intensively, ensuring 
                our clients to work with professional freelancers with great 
                results
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 mb-2">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              No Cost Until You Hire
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 mb-4">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              Safe and Secure
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center">
          {people.map((person, index) => (
            <div key={index} className="card w-96 bg-base-100 shadow-xl mb-8 mx-4">
              <div className="card-body">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h2 className="text-xl font-bold">{person.name}</h2>
                    <p className="text-gray-500">{person.role}</p>
                  </div>
                </div>
                {person.skills && (
                  <div className="flex space-x-2 mb-4">
                    {person.skills.map((skill, index) => (
                      <span key={index} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
                <button className="btn btn-primary">View Profile</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Marketing;
