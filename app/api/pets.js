const getPets = () => Promise.resolve([{
  id: '33b2d58d-9a43-4e12-bb7d-54a08716f99b',
  type: 'cat',
  name: 'Fluffy McCuddlebutts',
  birthday: 1491780036,
  created_at: 1491780072,
  owners: ['google-oauth2|106800659518663816000'],
  image_url: 'https://storage.googleapis.com/pet-whisperer.appspot.com/655881db-9f7c-48e5-a225-5613b770846c.jpeg',
}]);

export default {
  getPets,
};
