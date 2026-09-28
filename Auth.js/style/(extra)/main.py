import sys

from PyQt5.QtCore import *
from PyQt5.QWebEngineWidgets import QWebEngineView
from PyQt5.QtWidgets import (
    QApplication,
    QMainWindow,
    QToolBar,
    QAction,
    QLineEdit,
)

class MainWindow(QMainWindow):
  def __init__(self):
    super(MainWindow,self).__init__()
    self.browser= QWebEngineView()
    self.browser.setUrl(QUrl("http://google.com"))
    self.setCentralWidget(self.browser)
    self.showMaximized()

    navbar= QToolBar("Navigation")
    self.addToolBar(navbar)

    back_btn= QAction("back",self)
    back_btn.triggered.connect(self.browser.back)
    navbar.addAction(back_btn)

    front_btn= QAction("forward",self)
    front_btn.triggered.connect(self.browser.forward)
    navbar.addAction(front_btn)

    reload_btn= QAction("reload",self)
    reload_btn.triggered.connect(self.browser.reload)
    navbar.addAction(reload_btn)

    home_btn= QAction("home",self)
    home_btn.triggered.connect(self.navigate_home)
    navbar.addAction(home_btn)

    self.url_bar= QLineEdit()
    self.url_bar.returnPressed.connect(self.navigate_to_url)
    navbar.addWidget(self.url_bar)

  def navigate_home(self):
    self.browser.setUrl(QUrl("http://google.com"))

  def navigate_to_url(self):
    url= self.url_bar.text()
    if not url.startswith(("http://","https://")):
      url= "http://" + url
    self.browser.setUrl(QUrl(url))


app= QApplication(sys.argv)
QApplication.setApplicationName("My App")
window= MainWindow()
sys.exit(app.exec_())