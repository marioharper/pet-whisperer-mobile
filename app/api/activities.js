const getPetActivities = animalId => Promise.resolve([
  { type: 'medication',
    animal_id: animalId,
    created_at: 1491829804,
    by: 'google-oauth2|106800659518663816000',
    at: 1497230290,
    note: '',
  },
  {
    type: 'feed',
    animal_id: animalId,
    created_at: 1491936036,
    by: 'google-oauth2|106800659518663816000',
    at: 1491936028,
    note: '',
  },
  {
    type: 'feed',
    animal_id: animalId,
    created_at: 1491936083,
    by: 'google-oauth2|106800659518663816000',
    at: 1489689673,
    note: 'fghj',
  },
]);

export default {
  getPetActivities,
};
