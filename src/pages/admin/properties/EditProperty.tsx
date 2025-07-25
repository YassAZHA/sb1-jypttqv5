import React from 'react';
import { useParams } from 'react-router-dom';
import PropertyForm from '../../../components/admin/properties/PropertyForm';
import { useProperty } from '../../../hooks/useProperty';
import { Loader } from 'lucide-react';

export default function EditProperty() {
  const { id } = useParams();
  const { property, loading, error } = useProperty(id);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="text-center text-red-500 py-8">
        {error || 'Property not found'}
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Edit Property</h1>
      <div className="max-w-4xl mx-auto">
        <PropertyForm property={property} />
      </div>
    </div>
  );
}