

export const HomeSectionCard = () => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
        <div className="h-[13rem] w-[10rem]">
            <img className="object-cover object-top w-full h-full" src="https://img.freepik.com/foto-gratis/camiseta-negra-simple-usada-hombre_53876-102772.jpg?t=st=1716453690~exp=1716457290~hmac=ba010f8b3896ba9ad2d276576e026cc3765ca1d5373bf9303b231654026b869e&w=740" alt="man_shirt" />
        </div>
        <div className="p-4">
            <h3 className="text-lg font-medium text-gray-900">Man Shirt</h3>
            <p className="mt-2 text-sm text-gray-600">Manfinity Homme Camisa Holgada</p>
        </div>
    </div>
  )
}
