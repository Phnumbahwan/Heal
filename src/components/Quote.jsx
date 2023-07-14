const Quote = ({ quote, author }) => {
    return (
        <div>{`${quote} -"${author}"`}</div>
    );
}

export default Quote;