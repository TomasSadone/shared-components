export const subscribeFunctionGenerator = (canvas: fabric.Canvas, event: string) => {
  const subscribe = (callback: any) => {
    // el callback se pasa automaticamente, no es que aca definimos la logica de cambiar el valor
    //el valor aca tiene que llegar cambiado, y el callback se fija si es igual o no, y manda otro snapshot si no lo es
    canvas.on(event, callback);
    return () => {
      canvas.off(event, callback);
    };
  };
  return subscribe;
};
