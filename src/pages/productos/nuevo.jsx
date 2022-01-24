import useFormData from 'hooks/useFormData';
import React from 'react';

const NuevoProducto = () => {
  const { form, formData, updateFormData } = useFormData();

  const submitForm = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log(formData);
  };
  return (
    <div className='h-full flex flex-col items-center justify-start'>
      <h1 className='text-3xl text-gray-800 my-6'>Nuevo Producto</h1>
      <form ref={form} onChange={updateFormData} onSubmit={submitForm}>
        <div className='flex flex-col'>
          <label htmlFor='nombre'>
            <span>Nombre del Producto</span>
            <input name='nombre' type='text' placeholder='El Mejor Producto' />
          </label>
          <label htmlFor='descripcion'>
            <span>Descripción del Producto</span>
            <input
              name='descripcion'
              type='text'
              placeholder='La mejor descripcion'
            />
          </label>
          <label htmlFor='precio'>
            <span>Precio del Producto</span>
            <input name='precio' type='number' placeholder='10000' />
          </label>
          <button type='submit' className='button-submit'>
            Crear Producto
          </button>
        </div>
      </form>
    </div>
  );
};

export default NuevoProducto;
