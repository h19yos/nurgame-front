const SignOutModal = ({ isOpen, onClose, onSignOut }: { isOpen: boolean; onClose: () => void; onSignOut: () => void }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Sign Out?</h2>
                <p>Are you sure you want to sign out?</p>
                <div className="modal-buttons">
                    <button className="cancel-button" onClick={onClose}>
                        Cancel
                    </button>
                    <button className="signout-button" onClick={onSignOut}>
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignOutModal;
