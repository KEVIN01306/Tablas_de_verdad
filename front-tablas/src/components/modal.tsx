






const ModalInformacion = () => {


    return(
            <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Launch static backdrop modal
            </button>


                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus sit odio voluptates sapiente eum consectetur! Deleniti voluptate animi facere delectus, quia impedit similique! Voluptatibus dolor illo quia nesciunt eligendi magnam?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit necessitatibus explicabo in facilis distinctio ea corrupti vel culpa aut consectetur inventore omnis, rerum ipsa voluptate expedita dolore modi qui sit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam assumenda praesentium possimus accusamus minus facere fugiat voluptatibus nemo quas doloremque! Incidunt, iusto vero! Harum ab minus ea veniam repudiandae et?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, maiores. Ea laudantium quis quo assumenda, provident magnam sequi, deleniti iusto impedit ducimus aliquid possimus optio accusamus. Sint hic fugit ex.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, quae deleniti. Facere dolorem quos aperiam nemo nam inventore et rem modi vero deserunt? Ipsam quas neque alias et? Voluptatem, officiis.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse cum ab sit debitis vel quo numquam, voluptatum magnam excepturi praesentium libero dolor omnis reiciendis dolorem non totam, rerum ducimus? Doloribus?RE
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Understood</button>
                        </div>
                </div>
    </div>
    </div>
        </>
    )
}

export default ModalInformacion


