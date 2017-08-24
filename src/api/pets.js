let pets = [{
  id: '1a234715-4157-4005-8724-28954cb082f6',
  type: 'dog',
  name: 'Chunk',
  birthday: 1465621200,
  created_at: 1497219782,
  owners: ['google-oauth2|106800659518663816000'],
  image_url: 'https://storage.googleapis.com/pet-whisperer.appspot.com/9f9042e5-6f55-438f-b32f-89974b51b9ae.jpg',
},
{
  id: '33b2d58d-9a43-4e12-bb7d-54a08716f99b',
  type: 'cat',
  name: 'Fluffy McCuddlebutts',
  birthday: 1491780036,
  created_at: 1491780072,
  owners: ['google-oauth2|106800659518663816000'],
  image_url: 'https://storage.googleapis.com/pet-whisperer.appspot.com/655881db-9f7c-48e5-a225-5613b770846c.jpeg',
}];

const getPets = () => Promise.resolve(pets);

const updatePet = (updatedPet) => {
  pets = pets.map((pet) => {
    if (pet.id === updatedPet.id) {
      return updatedPet;
    }

    return pet;
  });

  return Promise.resolve(updatedPet);
};

export default {
  getPets,
  updatePet,
};
