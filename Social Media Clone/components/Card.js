const Card = () => {
  return (
    <div className="card border-b-2 p-4">
      <div className="flex place-items-center">
        <img
          src="https://images7.alphacoders.com/320/thumb-1920-320623.png"
          className="rounded-full h-10"
        />
        <h1 className="pl-2 font-semibold">
          Major League Hacking LHD: share 2021{' '}
          <span className="text-gray-400 font-normal">@MLH_LHD:share</span>
        </h1>
      </div>
      <p className="pl-20">
        This is a twitter clone. This is a twitter clone. This is a twitter clone.
         This is a twitter clone. This is a twitter clone.
          This is a twitter clone. This is a twitter clone.
           This is a twitter clone. This is a twitter clone.
      </p>
    </div>
  );
};

export default Card;
