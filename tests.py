import unittest
from pyramid import Pyramid

class TestFastestSlideUsingIncludedExamples(unittest.TestCase):

    def test_example_file(self):
        pyramid = Pyramid("./resources/pyramid_example.txt")
        self.assertEqual(pyramid.getFastestSlide(), 14)

    def test_example_small(self):
        pyramid = Pyramid("./resources/pyramid_small.txt")
        self.assertEqual(pyramid.getFastestSlide(), 7)

    def test_example_a(self):
        pyramid = Pyramid("./resources/pyramid_a.txt")
        self.assertEqual(pyramid.getFastestSlide(), 16)

    def test_example_b(self):
        pyramid = Pyramid("./resources/pyramid_b.txt")
        self.assertEqual(pyramid.getFastestSlide(), 447)

    def test_example_small_add_layer(self):
        pyramid = Pyramid("./resources/pyramid_small.txt")
        pyramid.addLayer([7, 8, 9, 10])
        self.assertEqual(pyramid.getFastestSlide(), 14)

    def test_example_small_remove_layer(self):
        pyramid = Pyramid("./resources/pyramid_small.txt")
        pyramid.removeLayer()
        self.assertEqual(pyramid.getFastestSlide(), 3)

    def test_example_small_not_from_file(self):
        pyramid = Pyramid()
        pyramid.addLayer([1])
        pyramid.addLayer([2,3])
        pyramid.addLayer([4,5,6])
        self.assertEqual(pyramid.getFastestSlide(), 7)

    def test_remove_layer_without_layers(self):
        pyramid = Pyramid()
        with self.assertRaises(Exception):
            pyramid.removeLayer()

    def test_add_incorrect_layer_size(self):
        pyramid = Pyramid("./resources/pyramid_small.txt")
        with self.assertRaises(Exception):
            pyramid.addLayer([1])

    def test_add_incorrect_emptylayer(self):
        pyramid = Pyramid()
        with self.assertRaises(Exception):
            pyramid.addLayer([])

    def test_with_only_one_layer(self):
        pyramid = Pyramid()
        pyramid.addLayer([1])
        self.assertEqual(pyramid.getFastestSlide(), 1)

if __name__ == '__main__':
    unittest.main()