import { useParams } from 'react-router-dom';
import { useAnimal } from '../hooks/useAnimal';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

export function AnimalDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { animal, loading, error } = useAnimal(Number(id));

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <LoadingSpinner size="lg" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-red-600">
          <p className="text-lg">Erro ao carregar animal</p>
          <p className="text-sm">{error}</p>
        </div>
      </div>
    );
  }

  if (!animal) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-lg">Animal não encontrado</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{animal.name}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {animal.images.length > 0 ? (
              <img
                src={animal.images[0]}
                alt={animal.name}
                className="w-full h-96 object-cover rounded-lg"
              />
            ) : (
              <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Sem foto</span>
              </div>
            )}
          </div>

          <div>
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Informações
                </h2>
                <div className="mt-2 space-y-2">
                  <p>
                    <span className="font-medium">Espécie:</span>{' '}
                    {animal.species}
                  </p>
                  {animal.breed && (
                    <p>
                      <span className="font-medium">Raça:</span> {animal.breed}
                    </p>
                  )}
                  <p>
                    <span className="font-medium">Idade:</span> {animal.age}{' '}
                    anos
                  </p>
                  <p>
                    <span className="font-medium">Localização:</span>{' '}
                    {animal.location}
                  </p>
                  <p>
                    <span className="font-medium">Status:</span>{' '}
                    {animal.available ? 'Disponível' : 'Indisponível'}
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Descrição
                </h2>
                <p className="mt-2 text-gray-700">{animal.description}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Contato da ONG
                </h2>
                <div className="mt-2 space-y-2">
                  <p>
                    <span className="font-medium">Nome:</span>{' '}
                    {animal.shelter.name}
                  </p>
                  <p>
                    <span className="font-medium">Email:</span>{' '}
                    {animal.shelter.email}
                  </p>
                  {animal.shelter.phone && (
                    <p>
                      <span className="font-medium">Telefone:</span>{' '}
                      {animal.shelter.phone}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
