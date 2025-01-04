from app import db, Admin

username = "admin"
password = "admin"
db.session.add(Admin(username, password))
db.session.commit()