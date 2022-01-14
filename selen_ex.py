from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import Select
import time
import doc.config as cfg
home_url=cfg.hpd_home_url
options = Options()
options.add_argument('ignore-certificate-errors')
browser = webdriver.Chrome('./doc/chromedriver', options=options)
browser.set_window_size(400,800)  #browser.maximize_window()
browser.get(home_url)
browser.find_element_by_id('apply_name').send_keys("ABC")
browser.find_element_by_id('name1').send_keys("ABC")
browser.find_element_by_id('name2').send_keys("ABC")
browser.find_element_by_id('attendance').send_keys("3")
browser.find_element_by_id('tel').send_keys("12345678")
captcha_num=browser.find_element_by_id('captcha_num').get_attribute('innerHTML')
browser.find_element_by_id('captcha').send_keys(captcha_num)
browser.find_element_by_id('submitbtn').click()
time.sleep(2)
#browser.save_screenshot(cfg.hpd_png)
browser.quit()

#from PIL import Image
#screenshot = Image.open(‘ss.png’)
#screenshot.show()
