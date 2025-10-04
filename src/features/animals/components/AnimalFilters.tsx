import { useState } from 'react';
import {
  AnimalFilters as IAnimalFilters,
  AnimalSpecies,
} from '../types/animal.types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface AnimalFiltersProps {
  filters: IAnimalFilters;
  onFiltersChange: (filters: IAnimalFilters) => void;
}

export function AnimalFilters({
  filters,
  onFiltersChange,
}: AnimalFiltersProps) {
  const [localFilters, setLocalFilters] = useState<IAnimalFilters>(filters);

  const handleInputChange = (
    field: keyof IAnimalFilters,
    value: string | number
  ) => {
    const newFilters = { ...localFilters, [field]: value || undefined };
    setLocalFilters(newFilters);
  };

  const handleApplyFilters = () => {
    onFiltersChange(localFilters);
  };

  const handleClearFilters = () => {
    const clearedFilters: IAnimalFilters = {};
    setLocalFilters(clearedFilters);
    onFiltersChange(clearedFilters);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filtrar Animais</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <Label htmlFor="species">Espécie</Label>
            <select
              id="species"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={localFilters.species || ''}
              onChange={(e) =>
                handleInputChange('species', e.target.value as AnimalSpecies)
              }
            >
              <option value="">Todas</option>
              <option value="DOG">Cachorro</option>
              <option value="CAT">Gato</option>
              <option value="BIRD">Pássaro</option>
              <option value="RODENT">Roedor</option>
              <option value="OTHER">Outro</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="breed">Raça</Label>
            <Input
              id="breed"
              placeholder="Digite a raça"
              value={localFilters.breed || ''}
              onChange={(e) => handleInputChange('breed', e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="available">Disponibilidade</Label>
            <select
              id="available"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={
                localFilters.available !== undefined
                  ? localFilters.available.toString()
                  : ''
              }
              onChange={(e) =>
                handleInputChange(
                  'available',
                  e.target.value === 'true'
                    ? true
                    : e.target.value === 'false'
                      ? false
                      : undefined
                )
              }
            >
              <option value="">Todos</option>
              <option value="true">Disponível</option>
              <option value="false">Indisponível</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Localização</Label>
            <Input
              id="location"
              placeholder="Cidade ou Estado"
              value={localFilters.location || ''}
              onChange={(e) => handleInputChange('location', e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <Button
            onClick={handleApplyFilters}
            className="bg-blue-500 hover:bg-blue-600"
          >
            Aplicar Filtros
          </Button>
          <Button
            onClick={handleClearFilters}
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            Limpar Filtros
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
