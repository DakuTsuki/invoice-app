'use server'

export async function createAction(formData: FormData){
  const value = Math.floor(
    Number.parseFloat(String(formData.get("value"))) * 100,
  );

  console.log("value:", value )
  
}