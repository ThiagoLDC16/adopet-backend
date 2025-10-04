import { Animal } from '../types/animal.types';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface AnimalCardProps {
  animal: Animal;
}

export function AnimalCard({ animal }: AnimalCardProps) {
  const getStatusColor = (available: boolean) => {
    return available
      ? 'bg-green-100 text-green-800'
      : 'bg-gray-100 text-gray-800';
  };

  const getStatusText = (available: boolean) => {
    return available ? 'Disponível' : 'Indisponível';
  };

  const getSpeciesText = (species: string) => {
    switch (species) {
      case 'DOG':
        return 'Cachorro';
      case 'CAT':
        return 'Gato';
      case 'BIRD':
        return 'Pássaro';
      case 'RODENT':
        return 'Roedor';
      case 'OTHER':
        return 'Outro';
      default:
        return species;
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-square relative overflow-hidden bg-gray-100">
        {animal.images.length > 0 ? (
          <img
            src={animal.images[0]}
            alt={animal.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            Sem foto
          </div>
        )}
        <div className="absolute top-2 right-2">
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(animal.available)}`}
          >
            {getStatusText(animal.available)}
          </span>
        </div>
      </div>
      <CardHeader>
        <div className="space-y-1">
          <h3 className="font-semibold text-lg text-gray-900">{animal.name}</h3>
          <p className="text-sm text-gray-600">
            {getSpeciesText(animal.species)}{' '}
            {animal.breed && `- ${animal.breed}`}
          </p>
          <p className="text-sm text-gray-500">
            {animal.age} anos • {animal.location}
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-700 line-clamp-2 mb-4">
          {animal.description}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <span>ONG: {animal.shelter.name}</span>
        </div>
        <Link to={`/animals/${animal.id}`}>
          <Button className="w-full">Ver Detalhes</Button>
        </Link>
      </CardContent>
    </Card>
  );
}
