import React from "react";

const userTable = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.users.length > 0 ? (
                    props.users.map(user => {
                        const { id, name, username } = user;
                        return (
                            <tr>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{username}</td>
                                <td>
                                    <button
                                        onClick={() => props.deleteUser(id)}>
                                        Delete
                                    </button>
                                    <button
                                        onClick={() => props.editUser(user)}>
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                ) : (
                    <tr>
                        <td colSpan='{4}'>No users found</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default userTable